<?php
namespace Eduar\App\lib;

use PDO;
use PDOException;

class Database{
    private string $host;
    private string $db;
    private string $user;
    private string $password;
    private string $charset;

    public function __construct()
    {
        $this->host = 'localhost';
        $this->db = 'mensajes';
        $this->user = 'root';
        $this->password = '';
        $this->charset = 'utf8mb4';
    }
    
    public function connect()
    {
        try{
            $connection = "mysql:host={$this->host};dbname={$this->db};charset={$this->charset};";
            
            //Exceptions PREPARE
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
            ];
            
            //Request to DB
            $pdo = new PDO($connection, $this->user, $this->password, $options);


            //PDO Object
            return $pdo;
        }catch(PDOException $th){
            throw $th;
        }
    }
}