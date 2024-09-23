
<?php
session_start();
 $situ = $_SESSION["situacao"];

 if($situ!="logado"){
  header("location:../views/cadastro.php");
 }

 else{
  header("location:../views/configUsers.php");
 }
?>