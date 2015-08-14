<?php

require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3; 

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'icoachfirstteam@gmail.com';                 // SMTP username
$mail->Password = 'Smtp123456';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = 'icoachfirstteam@gmail.com';
$mail->FromName = 'iCoachFirst Team';
$mail->addAddress("rgupta@talentfirst.com", 'Rishav Gupta');     // Add a recipient
$mail->addReplyTo('icoachfirstteam@gmail.com', 'Information');

$mail->isHTML(true);                                  // Set email format to HTML

//specific stuff
$name = $_POST["name"];
$email = $_POST["email"];
// The message
$message = $name." requested a demo on the iCoachFirst microsite.\r\nHis/her email is \r\n".$email;
//end specific stuff

$mail->Subject = 'Request for iCoachFirst Demo';
$mail->Body    = $message;
$mail->AltBody = $message;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>