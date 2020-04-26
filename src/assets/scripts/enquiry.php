<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "enquiry@markdataconsulting.com";
$to = "siddhartha@markdataconsulting.com";
$subject = "Enquiry from Customer";
$message = "I wanted to know more about your services";
$headers = "From:" . $from;
mail($to,$subject,$message, $headers);
echo "The email message was sent.";
?>
