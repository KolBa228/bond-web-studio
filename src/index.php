<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $name = $_POST["firstname"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $comment = $_POST["subject"];

  $message = "Name: " . $name . "\n";
  $message .= "Phone: " . $phone . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Comment: " . $comment;

  $to = "bond.webstudio@gmail.com";
  $subject = "Contact Form Submission";

  if (mail($to, $subject, $message)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>