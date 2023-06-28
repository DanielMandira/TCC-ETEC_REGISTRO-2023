<?php
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];
$id_livro = @$_GET['idl'];

$query1 = $pdo->prepare("INSERT INTO agendamento (status_agendamento, id_usuario, id_livro) VALUES ('Agendado', '".$id_usuario."', '".$id_livro."')");
$query1 -> execute();

$query2 = $pdo->prepare("SELECT * FROM `disponibilidade` WHERE id_livro = '32'");
$query2 -> execute();

$res = $query2->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados[] = array(
    $count = $res[$i]['quantidade_livro'],
);
}
$count = $count-1;
$query3 = $pdo->prepare("UPDATE disponibilidade SET quantidade_livro = '".$count."' WHERE id_livro = '".$id_livro."'");
$query3 -> execute();