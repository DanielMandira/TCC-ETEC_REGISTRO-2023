<?php
session_start();
include('../models/conexao.php');
$varida = $_SESSION["id_usuario"];
$varidl = $_GET['idl'];

if($varida =="" || $varidl =="" ){

    echo"ERRO";

}

else{
    
    try{$query = mysqli_query($conexao,"UPDATE emprestimo SET status_emprestimo = 'Devolvido' where id_livro = '$varidl' and id_usuario = '$varida' and status_emprestimo = 'Emprestado' ");
    }

    finally{
        echo "Devolvido com sucesso.";
    }

}