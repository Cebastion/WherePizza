<?php
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);
$hostname = 'sql106.infinityfree.com';
$username = 'if0_34572401';
$passwordDb = 'xnl4VYK4TNpw';
$database = 'if0_34572401_wherepizza';

$mysqli = new mysqli($hostname, $username, $passwordDb, $database);
//$mysqli = new mysqli('localhost', 'root', '', 'WherePizza');

if ($mysqli->connect_error) {
    echo 'Error Number: ' . $mysqli->connect_errno . '<br>';
    echo "Error: " . $mysqli->connect_error;
} else {
    $mysqli->query("INSERT INTO `Users`(`id`, `name`, `password`, `email`) VALUES (NULL, '$name' , '$password' , '$email')");
    echo "success";
}

$mysqli->close();
