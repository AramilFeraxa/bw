<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$message = trim($data["message"] ?? "");

if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Invalid input"]);
    exit;
}

$smtpHost = "jakubjedrzjb.nazwa.pl";
$smtpPort = 465;
$smtpUser = "kontakt@bezpiecznywypoczynek.pl";
$smtpPass = "BezpiecznyWypoczynek!9!";
$toEmail  = "kontakt@bezpiecznywypoczynek.pl";

$subject = "$name wysłał wiadomość ze strony bezpiecznywypoczynek.pl";
$text = "Imię: $name\nEmail: $email\n\nWiadomość:\n$message";
$html = "
<div>
  Imię: <strong>$name</strong><br>
  Email: <a href='mailto:$email'>$email</a><br><br>
  <div>Wiadomość:</div>
  <div>" . nl2br(htmlspecialchars($message)) . "</div>
</div>
";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = ($smtpPort == 465) ? 'ssl' : 'tls';
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtpUser, "$name przez Formularz");

    $mail->addAddress($toEmail);

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $html;
    $mail->AltBody = $text;

    $mail->send();

    echo json_encode(["ok" => true]);
} catch (Exception $e) {
    error_log("Mail error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "Mail error"]);
}
