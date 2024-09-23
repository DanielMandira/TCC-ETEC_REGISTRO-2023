<?php
session_start();
include('../models/conexao.php');

$varIda = $_SESSION['id_usuario'];
$varidl = $_GET['idl'];

$queryFav = mysqli_query($conexao, "SELECT * FROM interesse where id_usuario = '".$varIda."' and id_livro = '".$varidl."';");
$fetchFav = mysqli_fetch_array($queryFav);

if($fetchFav > 0){
  $RemoveFav = mysqli_query($conexao,"DELETE FROM interesse WHERE id_usuario = '".$varIda."' and id_livro = '".$varidl."';");
  echo"removido";
  }

else{
  $AddFav = mysqli_query($conexao, "INSERT INTO interesse (id_usuario,id_livro) values ('".$varIda."', '".$varidl."');");
}

header("location:../views/emprestimoLivro.php?idl=".$varidl);
?>