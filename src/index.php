<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {

//   $name = htmlspecialchars($_POST["firstname"]);
// $phone = htmlspecialchars($_POST["phone"]);
// $email = htmlspecialchars($_POST["email"]);
// $comment = htmlspecialchars($_POST["subject"]);


//   $message = "Name: " . $name . "\n";
//   $message .= "Phone: " . $phone . "\n";
//   $message .= "Email: " . $email . "\n";
//   $message .= "Comment: " . $comment;

//   $to = "bond.webstudio@gmail.com";
//   $subject = "Contact Form Submission";

//   if (mail($to, $subject, $message)) {
//     echo "Email sent successfully!";
//   } else {
//     echo "Failed to send email.";
//   }
// }
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email_to = "bond.webstudio@gmail.com";
  $name = htmlspecialchars($_POST["name"]);
  $email_from = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);
  $email_subject = "Feedback from website";
  
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $email_from \r\n";
  
  $message_body = "Name: $name \r\nMessage: $message";
  
  ini_set("sendmail_from", $email_from);
  $sent = mail($email_to, $email_subject, $message_body, $headers, "-f" . $email_from);
  
  if ($sent) {
    header("Location: http://fasthosts.co.uk");
  } else {
    echo "There has been an error sending your comments. Please try later.";
  }
}
?>
