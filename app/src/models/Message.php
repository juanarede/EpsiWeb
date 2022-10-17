<?php
namespace Eduar\App\models;

use Eduar\App\lib\Database;

use PDO;

class Message extends Database
{
    private string $uuid;

    public function __construct(private string $email, private string $mensaje)
    {
        parent::__construct();

        $this->uuid = uniqid();
    }

    public function save()
    {
        $query = $this->connect()->prepare("INSERT INTO mensajes(uuid, email,mensaje) VALUES(:uuid, :email, :mensaje)");

        $query->execute(['email'=>$this->email, 'uuid'=>$this->uuid,'mensaje'=>$this->mensaje]);
    }
}