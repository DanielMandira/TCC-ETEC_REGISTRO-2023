
<?php
session_start();
 $situ = $_SESSION["situacao"];
 $varIdl = $_GET['idl'];

 if($situ!="logado"){
  header("location:../views/cadastro.php");
 }

 else{
  header("location:../views/emprestimolivro.php?idl=".$varIdl."");
 }
?>