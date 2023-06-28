<?php 
include_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];
$nome_usuario = @$postjson['nome_usuario'];
$sobrenome_usuario = @$postjson['sobrenome_usuario'];
$bio_usuario = @$postjson['bio_usuario'];

    $query = $pdo->prepare("UPDATE usuario SET nome_usuario = '".$nome_usuario."', sobrenome_usuario = '".$sobrenome_usuario."', bio_usuario = '".$bio_usuario."'  WHERE id_usuario = '".$id_usuario."'");
   $query->execute();
?>