<?php 
include('../models/conexao.php');

$varNome = $_POST["Nome"];
$varSobrenome = $_POST["Sobrenome"];
$varDataNasc = $_POST["DataNasc"];
$varGenero = $_POST["genero"];
$varCelular = $_POST["Celular"];
$varemail = $_POST["email"];
$varsenha = $_POST["senha"];
$varconfirmesenha = $_POST["Confirmesenha"];
$varCidade = $_POST["Cidade"];
$varBairro = $_POST["Bairro"];
$varRua = $_POST["Rua"];                                                                                                                                                                                                                                                                                                                                                                                                            
$varNumero = $_POST["Numero"];
//$varGeneroM = $_POST["m"];
//$varGeneroF = $_POST["f"];
//$varGeneroO = $_POST["O"];


//VERIFICAR SE O EMAIL CADASTRADO JA EXISTE!
if($varconfirmesenha != $varsenha || $varNome ==" " || $varSobrenome ==" " || $varDataNasc ==" " || $varGenero ==" " || $varCelular ==" " || $varemail ==" " || $varsenha ==" " || $varconfirmesenha ==" " || $varCidade ==" " || $varBairro ==" " || $varRua ==" " || $varNumero ==" "){
 
    echo 'ERROR!'; 
}
else if(mysqli_query($conexao, "INSERT INTO usuario (nome_usuario,sobrenome_usuario,email_usuario,tipo_usuario,telefone_usuario, senha_usuario, genero_usuario,data_nasc_usuario,imagem_usuario,rua_usuario,cidade_usuario,bairro_usuario,numeroResidencia_usuario) VALUES ('$varNome', '$varSobrenome', '$varemail','Usuario','$varCelular',md5('$varsenha'),'$varGenero',DATE_FORMAT('$varDataNasc','%Y/%m/%d'),'https://img.freepik.com/vetores-premium/icone-de-circulo-de-usuario-anonimo-estilo-simples-de-ilustracao-vetorial-com-sombra-longa_520826-1931.jpg','$varRua','$varCidade','$varBairro','$varNumero');") && $varconfirmesenha == $varsenha)
{
    header("location:../views/Login.php");
}


?>
