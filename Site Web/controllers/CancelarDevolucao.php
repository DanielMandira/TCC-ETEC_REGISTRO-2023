<?php
session_start();
include("../models/conexao.php");
$varida = $_SESSION['id_usuario'];
$varidl = $_GET['idl'];
if($varida =="" || $varidl ==""){

    echo"ERRO";

}

else{

    $queryValida = mysqli_query($conexao, "SELECT * FROM emprestimo where id_usuario = '$varida' and id_livro = '$varidl' and status_emprestimo = 'Devolvido' ");
    $fetchValida = mysqli_fetch_array($queryValida);

    if($fetchValida == 0){
        echo "Não há agendamentos para cancelar!";
    }

    else{

        try{$updateQuery= mysqli_query($conexao,"UPDATE emprestimo SET status_emprestimo = 'Emprestado', data_devolucao_livro = NULL where id_livro = '$varidl' and id_usuario = '$varida';");
        }

        finally{
            echo"Devolucao cancelada";
        }

    }

}
?>