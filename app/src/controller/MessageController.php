<?php
namespace Eduar\App\controller;

use Eduar\App\models\Message;

$dominioPermitido = "http://localhost:3000";
header("Access-Control-Allow-Origin: $dominioPermitido");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");

if(isset($_POST['btn-enviar'])){

    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $message = new Message($email, $mensaje);

    $mensaje->save();
}