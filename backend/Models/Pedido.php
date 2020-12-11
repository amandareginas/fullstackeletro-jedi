<?php 

require "Connection.php";

class Pedido

{
    public $nome_cliente;
    public $endereco_cliente;
    public $email_cliente;
    public $nome_produto;
    public $quantidade;
    public $valorunitario;
    public $valortotal;

    /*public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM pedidos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }*/


    public function registerPedido()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query(" INSERT INTO pedidos (nome_cliente, endereco_cliente, email_cliente, nome_produto, quantidade, valorunitario, valortotal) 
                                        values ('$this->nome_cliente', '$this->endereco_cliente', '$this->email_cliente', '$this->nome_produto', $this->quantidade, $this->valorunitario, $this->valortotal) ");
        
       // return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}