<?php
$hostname = 'sql106.infinityfree.com';
$username = 'if0_34572401';
$password = 'xnl4VYK4TNpw';
$database = 'if0_34572401_wherepizza';

//$mysqli = new mysqli('localhost', 'root', '', 'WherePizza');
$mysqli = new mysqli($hostname, $username, $password, $database);

if ($mysqli->connect_error) {
    echo "Error: " . $mysqli->connect_error;
} else {
    $res = $mysqli->query("SELECT `name`, `password`, `email`, `id` FROM `Users`");
    if ($res) {
        $row = $res->fetch_all(MYSQLI_ASSOC);
        $jsonData = json_encode($row);
        echo $jsonData;
    } else {
        echo "Query execution failed.";
    }
}

$mysqli->close();
