<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['myArray'])) {
        $array = $data['myArray'];

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
            foreach ($array as $item) {
                $name = $item['name'];
                $user_id = $item['user_id'];
                $img = $item['img'];
                $class = $item['class'];
                $size = $item['size'];
                $addIngridient = $item['addIngridient'];
                $amout = $item['amout'];

                $query = "INSERT INTO `purchases`(`id`, `user_id`, `name`, `class`, `addIngridient`, `price`, `size`, `purchase_date`) 
                            VALUES (NULL, '$user_id', '$name', '$class', '$addIngridient', '$amout', '$size', '" . date('Y-m-d H:i:s') . "')";

                $mysqli->query($query);
            }
            echo "success";
        }
        $mysqli->close();
    }
}
