<?php

// Define Host Info || Who is sending emails?
define("HOST_NAME", "bezpiecznywypoczynek.pl");
define("HOST_EMAIL", "kontakt@bezpiecznywypoczynek.pl");

// Define SMTP Credentials || Gmail Informations
define("SMTP_EMAIL", "kontakt@bezpiecznywypoczynek.pl");
define("SMTP_PASSWORD", "BezpiecznyWypoczynek!9"); // read documentations

// Define Recipent Info ||  Who will get this email?
define("RECIPIENT_NAME", "Stowarzyszenie - Aktywni na rzecz Bezpiecznego Wypoczynku");
define("RECIPIENT_EMAIL", "kontakt@bezpiecznywypoczynek.pl");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

// Sprawdź reCAPTCHA
$recaptcha_response = isset($_POST['recaptcha_response']) ? $_POST['recaptcha_response'] : '';

// Klucz tajny reCAPTCHA v3
$recaptcha_secret_key = '6Ledrm8pAAAAAMFLQdGlfUGzAm3L9amtX-kplKyw';

// Sprawdź reCAPTCHA response
$recaptcha_url = "https://www.google.com/recaptcha/api/siteverify";
$recaptcha_data = [
    'secret'   => $recaptcha_secret_key,
    'response' => $recaptcha_response,
];

$recaptcha_options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($recaptcha_data),
    ],
];

$recaptcha_context = stream_context_create($recaptcha_options);
$recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);

$recaptcha_response_data = json_decode($recaptcha_result);

// Sprawdź, czy reCAPTCHA response jest prawidłowy
if (!$recaptcha_response_data->success) {
    echo "<div class='inner error'><p class='error'>Potwierdź, że nie jesteś robotem!</p></div><!-- /.inner -->";
    exit();
}


try {
    // Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                           // Send using SMTP
    $mail->Host       = 'jakubjedrzjb.nazwa.pl'; // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                  // Enable SMTP authentication
    $mail->Username   = SMTP_EMAIL;            // SMTP username
    $mail->Password   = SMTP_PASSWORD;         // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable implicit TLS encryption
    $mail->Port       = 465;                   // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->CharSet = "UTF-8";

    // Recipients
    $mail->setFrom(HOST_EMAIL, HOST_NAME);
    $mail->addAddress(RECIPIENT_EMAIL, RECIPIENT_NAME); // Add a recipient

    // Content
    $name = isset($_POST['name']) ? preg_replace("/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name']) : "";
    $senderEmail = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : "";
    $phone = isset($_POST['phone']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone']) : "";
    $services = isset($_POST['services']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['services']) : "";
    $subject = isset($_POST['subject']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject']) : "";
    $address = isset($_POST['address']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['address']) : "";
    $website = isset($_POST['website']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['website']) : "";
    $message = isset($_POST['message']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message']) : "";

    if (empty($senderEmail) || !$senderEmail) {
        throw new Exception('Adres e-mail jest wymagany i musi być poprawny.');
    }

    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $name . ' wysłał wiadomość ze strony bezpiecznywypoczynek.pl ';
    $mail->Body    = 'Imię: ' . $name . "<br>";
    $mail->Body .= 'Email: ' . $senderEmail . "<br>";

    if ($phone) {
        $mail->Body .= 'Phone: ' . $phone . "<br>";
    }
    if ($services) {
        $mail->Body .= 'services: ' . $services . "<br>";
    }
    if ($subject) {
        $mail->Body .= 'Subject: ' . $subject . "<br>";
    }
    if ($address) {
        $mail->Body .= 'Address: ' . $address . "<br>";
    }
    if ($website) {
        $mail->Body .= 'Website: ' . $website . "<br>";
    }

    $mail->Body .= 'Wiadomość: ' . "<br>" . $message;

    $mail->send();
    echo "<div class='inner success'><p class='success'>Dziękujemy za wysłanie wiadomości!</p></div><!-- /.inner -->";
} catch (Exception $e) {
    echo "<div class='inner error'><p class='error'>Wiadomość nie została wysłana. Wystąpił błąd: {$mail->ErrorInfo}</p></div><!-- /.inner -->";
}
