<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if ($name === '' || $email === '' || $message === '') {
    echo json_encode('Error');
} else {
    mail('cristianlr3009@gmail.com', $email, $name . ': ' . $message);
    echo json_encode('Mensaje enviado');
}