<?php
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];
$id_livro = @$_GET['idl'];

$query = $pdo->prepare("DELETE FROM interesse WHERE id_usuario = '".$id_usuario."' AND id_livro = '".$id_livro."' ");

$query->execute();
