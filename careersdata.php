<?php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email']; // Sender's email, could be used in "From" header
    $position = $_POST['position'];
    $cover_letter = $_POST['cover_letter'];

    // Assuming $resume is processed and stored temporarily
    // Handling file uploads and sending as attachments requires more complex handling,
    // typically using a library like PHPMailer.

    // Email recipient
    $to = 'pradipyadav0126@gmail.com'; // Corrected email address
    // Subject of the email
    $subject = 'Application for ' . $position;
    // Construct email body
    $message = "Name: $name\nEmail: $email\nPosition: $position\nCover Letter:\n$cover_letter";
    // Headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Attempt to send the email
    if(mail($to, $subject, $message, $headers)) {
        echo "Application submitted successfully!";
    } else {
        echo "Failed to send the application.";
    }
}
?>
