<?php
// cPanel optimized contact form handler
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure only POST requests are allowed
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Error handling
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);

try {
    // Get POST data
    $input = file_get_contents("php://input");
    
    if (empty($input)) {
        echo json_encode([
            "success" => false,
            "message" => "No data received"
        ]);
        exit;
    }
    
    $data = json_decode($input, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid JSON data: " . json_last_error_msg()
        ]);
        exit;
    }
    
    if (!$data) {
        echo json_encode([
            "success" => false,
            "message" => "No data received or invalid JSON format"
        ]);
        exit;
    }
    
    // Validate required fields (make message optional if needed)
    $required = ["name", "email", "message"];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
            exit;
        }
    }
    
    // Validate email format
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email format"]);
        exit;
    }
    
    // Validate name (should be at least 2 characters and contain only letters and spaces)
    if (strlen(trim($data['name'])) < 2) {
        echo json_encode(["success" => false, "message" => "Name must be at least 2 characters long"]);
        exit;
    }
    
    if (!preg_match('/^[a-zA-Z\s\-\'\.]+$/', trim($data['name']))) {
        echo json_encode(["success" => false, "message" => "Name can only contain letters, spaces, hyphens, apostrophes, and periods"]);
        exit;
    }
    
    // Sanitize data
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($data['phone'] ?? ''));
    $company = htmlspecialchars(trim($data['company'] ?? ''));
    $serviceInterest = htmlspecialchars(trim($data['serviceInterest'] ?? 'General Inquiry'));
    $message = htmlspecialchars(trim($data['message']));
    
    // Use basic mail function for cPanel
    $to = 'info@astharural.org';
    $subject = "New Contact Form Submission: " . $serviceInterest . " - " . $name;
    
    // Headers optimized for cPanel
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/html; charset=UTF-8";
    $headers[] = "From: Astha Contact Form <info@astharural.org>";
    $headers[] = "Reply-To: " . $name . " <" . $email . ">";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "X-Priority: 1";
    $headers[] = "Importance: High";
    
    $body = createEmailHTML($name, $email, $phone, $company, $serviceInterest, $message);
    
    // Log the attempt
    error_log("Attempting to send email to: " . $to . " from: " . $name . " (" . $email . ")");
    
    if (mail($to, $subject, $body, implode("\r\n", $headers))) {
        error_log("Email sent successfully using basic mail function to: " . $to);
        
        // Send auto-reply "Thank You" email to the user
        $userSubject = "Thank you for contacting Astha Foundation";
        $userHeaders = array();
        $userHeaders[] = "MIME-Version: 1.0";
        $userHeaders[] = "Content-type: text/html; charset=UTF-8";
        $userHeaders[] = "From: Astha Foundation <info@astharural.org>";
        $userHeaders[] = "Reply-To: info@astharural.org";
        $userHeaders[] = "X-Mailer: PHP/" . phpversion();
        
        $userBody = createThankYouEmailHTML($name);
        
        if (mail($email, $userSubject, $userBody, implode("\r\n", $userHeaders))) {
            error_log("Auto-reply sent successfully to: " . $email);
        } else {
            error_log("Failed to send auto-reply to: " . $email);
        }

        echo json_encode(["success" => true, "message" => "Email sent successfully"]);
    } else {
        error_log("Basic mail function failed to send email to: " . $to);
        echo json_encode(["success" => false, "message" => "Failed to send email. Please contact us directly at info@astharural.org"]);
    }
    
} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    echo json_encode([
        "success" => false,
        "message" => "An error occurred while processing your request. Please try again."
    ]);
} catch (Error $e) {
    error_log("Contact form fatal error: " . $e->getMessage());
    echo json_encode([
        "success" => false,
        "message" => "A system error occurred. Please try again later."
    ]);
}

function createEmailHTML($name, $email, $phone, $company, $serviceInterest, $message) {
    $currentDate = date('Y-m-d H:i:s');
    return '
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background-color: #f9fafb; 
            color: #333;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 8px; 
            padding: 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header { 
            background: linear-gradient(90deg, #1e3a8a, #3b82f6); 
            color: white; 
            padding: 20px; 
            text-align: center; 
            border-radius: 8px 8px 0 0; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 24px; 
            font-weight: bold;
        }
        .content { 
            padding: 20px; 
            line-height: 1.6;
        }
        .info-section {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 15px;
            margin: 15px 0;
        }
        .info-row {
            margin: 8px 0;
            padding: 5px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label { 
            font-weight: bold; 
            color: #1f2937; 
            display: inline-block;
            min-width: 120px;
        }
        .value {
            color: #374151;
        }
        .message-section { 
            background: #fffbeb; 
            border-left: 4px solid #f59e0b; 
            padding: 15px; 
            margin: 15px 0;
            border-radius: 0 6px 6px 0;
        }
        .footer { 
            padding: 15px 20px; 
            text-align: center; 
            font-size: 12px; 
            color: #6b7280; 
            background: #f3f4f6;
            border-radius: 0 0 8px 8px;
        }
        .timestamp {
            font-size: 11px;
            color: #6b7280;
            text-align: right;
            margin-top: 10px;
        }
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
                <span class="value">' . $name . '</span>
            </div>
            <div class="info-row">
                <span class="label">📧 Email:</span>
                <span class="value">' . $email . '</span>
            </div>
            <div class="info-row">
                <span class="label">📱 Phone:</span>
                <span class="value">' . ($phone ?: 'Not provided') . '</span>
            </div>
            <div class="info-row">
                <span class="label">🏢 Company:</span>
                <span class="value">' . ($company ?: 'Not provided') . '</span>
            </div>
            <div class="info-row">
                <span class="label">🔧 Service Interest:</span>
                <span class="value">' . $serviceInterest . '</span>
            </div>
          </div>
          
          <div class="message-section">
            <p><strong>💬 Message:</strong></p>
            <p>' . nl2br($message) . '</p>
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
}

function createThankYouEmailHTML($name) {
    return '
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
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="color: #1e3a8a;">Thank You for Reaching Out!</h2>
        </div>
        <div class="content">
          <p>Dear <span class="highlight">' . $name . '</span>,</p>
          <p>Thank you for contacting <span class="highlight">Astha Foundation</span>. We have received your message and appreciate you taking the time to connect with us.</p>
          <p>Our team is reviewing your inquiry and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to visit our website to learn more about our latest initiatives and impact stories.</p>
          <p>Best regards,<br><strong>Team Astha Foundation</strong></p>
        </div>
        <div class="footer">
          &copy; ' . date("Y") . ' Astha Foundation | Velhe Taluka, Pune<br>
          <a href="https://astharural.org" style="color:#3b82f6; text-decoration:none;">www.astharural.org</a>
        </div>
      </div>
    </body>
    </html>';
}
?>