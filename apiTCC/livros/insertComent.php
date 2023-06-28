<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$postjson['idu'];
$id_livro = @$postjson['idl'];
$comentario = @$postjson['coment'];
$query = $pdo->prepare("INSERT INTO comentarios (id_usuario, id_livro, comentario_user) VALUES (".$id_usuario.", ".$id_livro.", '".$comentario."')");

$query->execute();


$result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));

echo $result;
?>