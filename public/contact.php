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
$primaryColor = "#2d4a3e"; // Forest green from website
$accentColor = "#c2410c";  // Terracotta accent from website
$bgColor = "#fdfbf7";      // Cream background from website
$logoUrl = "https://astharural.org/assets/logo.png"; // Assuming public path based on src

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
    body { font-family: "Source Sans 3", Arial, sans-serif; margin: 0; padding: 0; background-color: ' . $bgColor . '; color: #1a1a1a; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .header { background-color: ' . $primaryColor . '; padding: 30px 20px; text-align: center; }
    .logo { max-width: 180px; height: auto; margin-bottom: 15px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 40px 30px; line-height: 1.6; }
    .section-title { color: ' . $primaryColor . '; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; border-bottom: 2px solid ' . $bgColor . '; padding-bottom: 8px; }
    .info-grid { margin-bottom: 30px; }
    .info-item { margin-bottom: 12px; display: flex; }
    .label { font-weight: 600; color: #4b5563; width: 100px; font-size: 14px; }
    .value { color: #1f2937; flex: 1; font-size: 15px; }
    .message-box { background: #f9fafb; border-left: 4px solid ' . $accentColor . '; padding: 20px; border-radius: 0 8px 8px 0; margin-top: 10px; font-style: italic; color: #374151; }
    .footer { padding: 25px; text-align: center; font-size: 12px; color: #6b7280; background: #f9fafb; border-top: 1px solid #e5e7eb; }
    .timestamp { font-size: 11px; color: #9ca3af; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="' . $logoUrl . '" alt="Astha Foundation Logo" class="logo">
      <h1>New Inquiry Received</h1>
    </div>
    <div class="content">
      <div class="section-title">Submission Details</div>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">Name</span>
          <span class="value">' . htmlspecialchars($name) . '</span>
        </div>
        <div class="info-item">
          <span class="label">Email</span>
          <span class="value">' . htmlspecialchars($email) . '</span>
        </div>
        <div class="info-item">
          <span class="label">Phone</span>
          <span class="value">' . htmlspecialchars($phone) . '</span>
        </div>
      </div>
      
      <div class="section-title">Message Content</div>
      <div class="message-box">
        ' . nl2br(htmlspecialchars($message)) . '
      </div>
      
      <div class="timestamp">
        Received on: ' . $currentDate . '
      </div>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' Astha Foundation. All rights reserved.<br>
      This is an automated notification from astharural.org
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
    body { font-family: "Source Sans 3", Arial, sans-serif; margin: 0; padding: 0; background-color: ' . $bgColor . '; color: #1a1a1a; }
    .container { max-width: 600px; margin: 20px auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .header { background-color: ' . $primaryColor . '; padding: 30px 20px; text-align: center; }
    .logo { max-width: 180px; height: auto; margin-bottom: 15px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px; }
    .content { padding: 40px 30px; line-height: 1.7; text-align: center; }
    .content p { margin-bottom: 20px; color: #374151; }
    .highlight { color: ' . $primaryColor . '; font-weight: 700; }
    .btn { display: inline-block; padding: 14px 30px; background-color: ' . $accentColor . '; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px; margin: 20px 0; transition: background 0.3s ease; }
    .footer { padding: 25px; text-align: center; font-size: 12px; color: #6b7280; background: #f9fafb; border-top: 1px solid #e5e7eb; }
    .social-links { margin-top: 10px; }
    .social-links a { color: ' . $primaryColor . '; text-decoration: none; margin: 0 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="' . $logoUrl . '" alt="Astha Foundation Logo" class="logo">
      <h1>Thank You for Connecting</h1>
    </div>
    <div class="content">
      <p>Dear <span class="highlight">' . htmlspecialchars($name) . '</span>,</p>
      <p>We have successfully received your inquiry at <span class="highlight">Astha Foundation</span>. Our team values your interest in our mission and will review your message promptly.</p>
      <p>We strive to respond to all inquiries within 24-48 business hours. In the meantime, you can explore our ongoing projects and recent impact stories on our website.</p>
      <a href="https://astharural.org" class="btn">Explore Our Work</a>
      <p>Best Regards,<br><span class="highlight">Team Astha Foundation</span></p>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' Astha Foundation | Velhe Taluka, Pune<br>
      <a href="https://astharural.org" style="color:' . $primaryColor . '; text-decoration:none;">www.astharural.org</a>
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