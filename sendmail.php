<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($message)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        header('Location: error.html');
        exit;
    }

    $recipient = "Numair.A@AlgorithmInnovation.onmicrosoft.com";
    $subject = "New contact from $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";
    $email_headers .= "X-Sender: algorithminnovation.ltd <$recipient>\n";
    $email_headers .= 'X-Mailer: PHP/' . phpversion();
    $email_headers .= "X-Priority: 1\n"; // Urgent message!
    $email_headers .= "Return-Path: $recipient\n"; // Return path for errors
    $email_headers .= "MIME-Version: 1.0\r\n";
    $email_headers .= "Content-Type: text/html; charset=iso-8859-1\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        header('Location: thankyou.html');
    } else {
        http_response_code(500);
        header('Location: error.html');
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    header('Location: error.html');
}
?>
