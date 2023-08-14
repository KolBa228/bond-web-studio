<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email_to = "bond.webstudio@gmail.com";
  $name = htmlspecialchars($_POST["firstname"]);
  $email_from = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["subject"]);
  $email_subject = "Feedback from website";
  
  $headers = "From: $email_from\r\n";
  $headers .= "Reply-To: $email_from\r\n";
  
  $message_body = "Name: $name\r\nMessage: $message";
  
  ini_set("sendmail_from", $email_from);
  $sent = mail($email_to, $email_subject, $message_body, $headers, "-f$email_from");
  
  if ($sent) {
    echo "Message sent successfully. Thank you!";
  } else {
    echo "Message delivery failed.";
  }
}
?>
