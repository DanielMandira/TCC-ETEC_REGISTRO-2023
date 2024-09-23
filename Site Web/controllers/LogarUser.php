<?php 
include('../models/conexao.php');

$varemail = $_POST["email"];
$varsenha = $_POST["senha"];


$query = mysqli_query($conexao,"SELECT nome_usuario, email_usuario, senha_usuario, id_usuario FROM usuario WHERE email_usuario = '$varemail' AND senha_usuario = md5('".$varsenha."');");

$resultado = $conexao && $query;
//
if($resultado && mysqli_affected_rows($conexao) > 0) {

    session_start();
    $exibe = mysqli_fetch_array($query);
    $_SESSION["situacao"] = "logado";
    
    $ida= $exibe[3];
    $nome = $exibe[0];
    $_SESSION["id_usuario"] = $ida;
    $_SESSION["nome_usuario"] = $nome;

    header("location:../index.php");
   
 }

else {
    echo '<h1>ERRO!</h1>';
     header("location:../views/Login.php?msg=rr", true, );
}

?>
