<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'pradipyadav0126@gmail.com';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'pradipyadav0126@gmail.com';                // SMTP username
    $mail->Password = '123';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('your.email@example.com', 'Your Name');     // Add a recipient

    // Attachments
    if (isset($_FILES['resume']) &&
        $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
        $mail->addAttachment($_FILES['resume']['tmp_name'],
                             $_FILES['resume']['name']);    // Add attachments
    }

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Application from ' . $_POST['name'];
    $mail->Body    = 'This is the body in plain text for non-HTML mail clients';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
