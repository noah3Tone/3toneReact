<?php
//post request
$email = $_POST['email'];
$password = $_POST['pass'];
$user_login = $_POST['user'];

//add auth key
$authkey = '12345Six';

$url = 'http://localhost:8888/?rest_route=/simple-jwt-login/v1/users&email=' . $email . '&password=' . $password . '&authkey=' . $authkey;

//send post signup to wp

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close($ch);

$server_output_decode = json_decode($server_output);

if (isset($server_output_decode->success) && $server_output_decode->success ==0) {
    echo $server_output;
} else {
    $authUrl = 'http://localhost:8888/?rest_route=/simple-jwt-login/v1/auth&email=' . $email . '&password=' . $password ;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $authUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec($ch);
    curl_close($ch);
    echo $server_output;
}

//send auth to wp
?>