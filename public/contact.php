<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Ensure only POST requests are allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. Use POST."]);
    exit();
}

error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Debug function
function debugLog($message) {
    file_put_contents(__DIR__ . '/contact_debug.log', date('Y-m-d H:i:s') . " - " . $message . "\n", FILE_APPEND);
}

debugLog("=== Script started ===");

// ─── Database Configuration ───────────────────────────────────────────
$host     = "localhost";
$dbname   = "astharural_contact_form";
$username = "astharural_contact_user";
$password = "Astha@2025";

try {
    $conn = new mysqli($host, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        debugLog("Database connection failed: " . $conn->connect_error);
        // Continue without DB — emails will still be sent
        $conn = null;
    }
} catch (Exception $e) {
    debugLog("Database exception: " . $e->getMessage());
    $conn = null;
}

// ─── Parse Input ──────────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    // Fallback to form data
    $input = $_POST;
}

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');
$phone   = trim($input['phone'] ?? '');

debugLog("Extracted values - Name: '$name', Email: '$email', Phone: '$phone', Message: '$message'");

// ─── Validation ───────────────────────────────────────────────────────
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name and email are required fields"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email format"]);
    exit();
}

if (strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Name must be at least 2 characters long"]);
    exit();
}

// ─── Save to Database (Optional) ─────────────────────────────────────
$insert_id = null;
if ($conn && $conn->ping()) {
    try {
        $stmt = $conn->prepare("INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)");
        
        if ($stmt) {
            $stmt->bind_param("ssss", $name, $email, $phone, $message);
            
            if ($stmt->execute()) {
                $insert_id = $stmt->insert_id;
                debugLog("Database insert successful - ID: $insert_id");
            } else {
                debugLog("Database insert error: " . $stmt->error);
            }
            $stmt->close();
        }
    } catch (Exception $e) {
        debugLog("Database error: " . $e->getMessage());
    }
} else {
    debugLog("Database not connected or unreachable");
}

// ─── Email Configuration ──────────────────────────────────────────────
$adminEmail = "info@astharural.org";
$currentDate = date('Y-m-d H:i:s');

// Admin notification email headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Astha Foundation <info@astharural.org>\r\n";
$headers .= "Reply-To: " . $name . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1\r\n";
$headers .= "Importance: High\r\n";

$adminSubject = "🔔 New Contact Form Submission - Astha Foundation";

$adminMessage = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9fafb; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(90deg, #1e3a8a, #3b82f6); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
    .content { padding: 20px; line-height: 1.6; }
    .info-section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin: 15px 0; }
    .info-row { margin: 8px 0; padding: 5px 0; border-bottom: 1px solid #e2e8f0; }
    .info-row:last-child { border-bottom: none; }
    .label { font-weight: bold; color: #1f2937; display: inline-block; min-width: 120px; }
    .value { color: #374151; }
    .message-section { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 15px 0; border-radius: 0 6px 6px 0; }
    .footer { padding: 15px 20px; text-align: center; font-size: 12px; color: #6b7280; background: #f3f4f6; border-radius: 0 0 8px 8px; }
    .timestamp { font-size: 11px; color: #6b7280; text-align: right; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <p><strong>Hello Team,</strong></p>
      <p>You have received a new inquiry from your website contact form. Please review the details below:</p>
      
      <div class="info-section">
        <div class="info-row">
            <span class="label">👤 Name:</span>
            <span class="value">' . htmlspecialchars($name) . '</span>
        </div>
        <div class="info-row">
            <span class="label">📧 Email:</span>
            <span class="value">' . htmlspecialchars($email) . '</span>
        </div>
        <div class="info-row">
            <span class="label">📱 Phone:</span>
            <span class="value">' . htmlspecialchars($phone) . '</span>
        </div>
      </div>
      
      <div class="message-section">
        <p><strong>💬 Message:</strong></p>
        <p>' . nl2br(htmlspecialchars($message)) . '</p>
      </div>
      
      <p><strong>⏰ Next Steps:</strong> Please respond within 24 hours to maintain excellent service standards.</p>
      
      <div class="timestamp">
        Received on: ' . $currentDate . ' (Server Time)
      </div>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' Astha Foundation<br>
      <a href="mailto:info@astharural.org" style="color:#3b82f6; text-decoration:none;">info@astharural.org</a>
    </div>
  </div>
</body>
</html>';

// ─── Thank You email to user ──────────────────────────────────────────
$userSubject = "Thank You for Contacting Astha Foundation";

$userHeaders  = "MIME-Version: 1.0" . "\r\n";
$userHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$userHeaders .= "From: Astha Foundation <info@astharural.org>\r\n";
$userHeaders .= "Reply-To: info@astharural.org\r\n";
$userHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$userMessage = '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Astha Foundation</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9fafb; color: #333; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { text-align: center; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0; }
    .content { padding: 20px 0; line-height: 1.6; }
    .footer { text-align: center; font-size: 12px; color: #6b7280; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .highlight { color: #1e3a8a; font-weight: bold; }
    .btn { display: inline-block; margin-top: 15px; padding: 12px 24px; background: #1e3a8a; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="color: #1e3a8a;">Thank You for Reaching Out!</h2>
    </div>
    <div class="content">
      <p>Dear <span class="highlight">' . htmlspecialchars($name) . '</span>,</p>
      <p>Thank you for contacting <span class="highlight">Astha Foundation</span>. We have received your message and appreciate you taking the time to connect with us.</p>
      <p>Our team is reviewing your inquiry and will get back to you as soon as possible.</p>
      <p>In the meantime, feel free to visit our website to learn more about our latest initiatives and impact stories.</p>
      <p style="text-align:center;">
        <a href="https://astharural.org" class="btn">Visit Our Website</a>
      </p>
      <p>Best regards,<br><strong>Team Astha Foundation</strong></p>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' Astha Foundation | Velhe Taluka, Pune<br>
      <a href="https://astharural.org" style="color:#3b82f6; text-decoration:none;">www.astharural.org</a>
    </div>
  </div>
</body>
</html>';

// ─── Send Emails ──────────────────────────────────────────────────────
$adminMailSent = @mail($adminEmail, $adminSubject, $adminMessage, $headers);
$userMailSent  = @mail($email, $userSubject, $userMessage, $userHeaders);

debugLog("Admin email sent: " . ($adminMailSent ? "Yes" : "No"));
debugLog("User email sent: " . ($userMailSent ? "Yes" : "No"));

if ($adminMailSent || $userMailSent) {
    echo json_encode([
        "success"   => true,
        "message"   => "Message received successfully! We'll get back to you soon.",
        "insert_id" => $insert_id,
        "emails_sent" => [
            "admin" => $adminMailSent,
            "user" => $userMailSent
        ]
    ]);
} else {
    debugLog("Failed to send emails");
    echo json_encode([
        "success" => true,
        "message" => "Message received! (Email delivery may be delayed)",
        "warning" => "Failed to send confirmation emails. Please contact us directly at info@astharural.org if needed."
    ]);
}

// ─── Cleanup ──────────────────────────────────────────────────────────
if ($conn) {
    $conn->close();
}

debugLog("=== Script ended ===\n");
?>