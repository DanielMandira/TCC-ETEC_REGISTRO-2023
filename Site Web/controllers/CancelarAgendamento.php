<?php
session_start();
include('../models/conexao.php');
$varida = $_SESSION['id_usuario'];
$varidl = $_GET['idl'];

if($varida =="" || $varidl =="" ){

    echo"ERRO";

}

else{

    $queryValida = mysqli_query($conexao, "SELECT * FROM agendamento where id_usuario = '$varida' and id_livro = '$varidl';");
    $fetchValida = mysqli_fetch_array($queryValida);

    if ($fetchValida == 0){
        echo "Não há agendamentos para cancelar!";
    }

    else{

        $deleteQuery = mysqli_query($conexao, "DELETE FROM agendamento WHERE id_usuario = '$varida' AND id_livro = '$varidl';");
        $query1 = mysqli_query($conexao, "SELECT * FROM disponibilidade WHERE id_livro = '$varidl'"); 
        $fetchQ1 = mysqli_fetch_array($query1);
        echo $fetchQ1[1];

        for($i=0;$i < count($fetchQ1); $i++){

            $count = $fetchQ1[1];
        }

        $count = $count+1;

        $query2 = mysqli_query($conexao, "UPDATE disponibilidade SET quantidade_livro = '".$count."' WHERE id_livro = '".$varidl."';");
        header("location:../views/emprestimoLivro.php?idl=$varidl");
    }
}



?>