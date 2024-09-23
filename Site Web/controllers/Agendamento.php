<?php
session_start();
include('../models/conexao.php');
$varida = $_SESSION['id_usuario'];
$varidl = $_GET['idl'];

if($varida =="" || $varidl =="" ){

    echo"ERRO";

}

else{
    
    $queryValida = mysqli_query($conexao,"SELECT * FROM agendamento where id_usuario = $varida and id_livro = $varidl;");
    $fetchValida = mysqli_fetch_array($queryValida);
    
    if($fetchValida == 0)
    {
        $query = mysqli_query($conexao, "SELECT * from livro where id_livro = '$varidl'");
        $array = mysqli_fetch_array($query);
        $titulo = $array[1];
        
        $insertQuery = mysqli_query($conexao,"INSERT INTO agendamento (status_agendamento, id_usuario, id_livro) VALUES ('Agendado', '".$varida."', '".$varidl."')");
    
        $query2 = mysqli_query($conexao, "SELECT * FROM `disponibilidade` WHERE id_livro = '$varidl'");
        $fetchQ2 = mysqli_fetch_array($query2);
        echo $fetchQ2[1];
    
        for ($i=0; $i < count($fetchQ2); $i++){
            
           $count = $fetchQ2[1];
        }
        $count = $count-1;
        $query3 =mysqli_query($conexao,"UPDATE disponibilidade SET quantidade_livro = '".$count."' WHERE id_livro = '".$varidl."'");
        header("location:../views/emprestimoLivro.php?idl=$varidl");
    }
    
    else{

        echo"livro já emprestado!";
    }



   


}

?>