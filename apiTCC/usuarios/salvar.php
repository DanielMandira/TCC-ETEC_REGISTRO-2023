<?php
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$nome_usuario = @$postjson['nome_usuario'];
$sobrenome_usuario = @$postjson['sobrenome_usuario'];
$email_usuario = @$postjson['email_usuario'];
$senha_usuario = @$postjson['senha_usuario'];
$tipo_usuario = @$postjson['tipo_usuario'];
$genero_usuario = @$postjson['genero_usuario'];
$data_nasc_usuario = @$postjson['data_nasc_usuario'];
$rua_usuario = @$postjson['rua_usuario'];
$cidade_usuario = @$postjson['cidade_usuario'];
$bairro_usuario = @$postjson['bairro_usuario'];
$numeroResidencia_usuario = @$postjson['numeroResidencia_usuario'];
$telefone_usuario = @$postjson['telefone_usuario'];
$data_Nasc = implode('-', array_reverse(explode('/', $data_nasc_usuario)));
$id_usuario=0;


// validar email
$query = $pdo->query("SELECT * FROM usuario where email_usuario = '".$email_usuario."'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if ($total_reg > 0 and $res[0]['id_usuario'] != $id_usuario) {
	$result = json_encode(array('mensagem' => 'Email já Cadastrado, escolha Outro!', 'sucesso' => false));
	echo $result;
	exit();
}



if ($id_usuario == "" || $id_usuario == "0") {
	$query = $pdo->prepare("INSERT INTO usuario (nome_usuario, sobrenome_usuario, email_usuario, tipo_usuario, telefone_usuario, senha_usuario, genero_usuario, data_nasc_usuario, imagem_usuario, rua_usuario, cidade_usuario, bairro_usuario, numeroResidencia_usuario, bio_usuario) VALUES ('".$nome_usuario."', '".$sobrenome_usuario."', '".$email_usuario."', '".$tipo_usuario."', '".$telefone_usuario."', md5('".$senha_usuario."'), '".$genero_usuario."', '".$data_Nasc."', '".$imagem_usuario."', '".$rua_usuario."', '".$cidade_usuario."', '".$bairro_usuario."', '".$numeroResidencia_usuario."', '".$bio_usuario."')");

	$query->execute();

	$resulta = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));
	echo $resulta;
	exit();
}
