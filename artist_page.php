<?php
$servername = "localhost";
$username = "kevro";
$password = "";
$database = "artist_page";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>





