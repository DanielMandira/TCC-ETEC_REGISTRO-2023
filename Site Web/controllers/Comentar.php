<?php
    session_start();
    include('../models/conexao.php');
    $varIda = $_SESSION["id_usuario"];
    $varIdl = $_GET["idl"];
    $comentario = $_POST["comentario"];
   
    if(($varIda > 0) && ($varIdl > 0) && ($comentario > 0)){
       $queryInsert = mysqli_query($conexao, "INSERT INTO comentarios(id_usuario,id_livro,comentario_user)  VALUES ('".$varIda."','".$varIdl."','".$comentario."');"); 
    }

    else{
        echo"taloko jaguara foi nao";
    }

    header("location:../views/emprestimoLivro.php?idl=$varIdl");
