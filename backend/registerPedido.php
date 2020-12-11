<?php 

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");


require "./Models/Pedido.php";

$pedido = new Pedido;
$pedido->nome_cliente = $_POST['nome_cliente'];
$pedido->endereco_cliente = $_POST['endereco_cliente'];
$pedido->email_cliente = $_POST['email_cliente'];
$pedido->nome_produto = $_POST['nome_produto'];
$pedido->valorunitario = $_POST['valorunitario'];
$pedido->quantidade = $_POST['quantidade'];
$pedido->valortotal = $_POST['valortotal'];





$pedido->registerPedido();

