<?php

//SELECT comentarios.*, produto.descricao FROM comentarios INNER JOIN produto ON comentarios.idproduto = produto.idproduto

require "Connection.php";

class Comentario
{
    public static function getAll() {

        $connection = Connection::getDb();
        $stmt = $connection->query("SELECT produto.descricao, comentarios.nome, comentarios.msg, comentarios.data FROM produto INNER JOIN comentarios ON produto.idproduto = comentarios.idproduto");

        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }

}