<?php
$hostname = 'sql106.infinityfree.com';
$username = 'if0_34572401';
$password = 'xnl4VYK4TNpw';
$database = 'if0_34572401_wherepizza';

$mysqli = new mysqli($hostname, $username, $password, $database);
//$mysqli = new mysqli('localhost', 'root', '', 'WherePizza');

if ($mysqli->connect_error) {
    echo 'Error Number: ' . $mysqli->connect_errno . '<br>';
    echo 'Error: ' . $mysqli->connect_error;
} else {
    $res = $mysqli->query("SELECT `name`, `class`, `price`, `size`, `addIngridient`, `user_id` FROM `purchases`");
    if ($res) {
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $jsonData = json_encode($row);
        echo $jsonData;
    } else {
        echo 'Query execution failed.';
    }
}

$mysqli->close();