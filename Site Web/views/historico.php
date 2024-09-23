
<?php

session_start();
$varida = $_SESSION['id_usuario'];
include('../models/conexao.php');
include('../controllers/funcoes.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Histórico de empréstimos</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='../Css/historico.css'>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <link rel='shortcut icon' href='../Img/logo.png'>
 
</head>

<body>
    
    <header class='headervoltar'>
        <?php 
        
        echo"<div class='divVoltar'>
        <a href='configUsers.php'><img src='../Img/Emprestimo Livro/seta_Voltar.png' alt=''></a>
    </div>";

        ?>
        
    </header><?php
    echo 
        "<h1>Empréstimos agendados:</h1>";?>
    <main class='main'>
        <?php
        
        historicoAgendado();
    ?>
    </main>

    <?php echo
        "<h1>Emprestados atualmente</h1>";?>
    <main class='main'>
       <?php
        historicoEmAndamento();
    ?>
    </main>

    <?php
    echo 
        "<h1>Empréstimos concluídos</h1>";?>
    <main class='main'>
        <?php
        
        historicoConcluidos();
    ?>
    </main>
    
</body>
<script>
       

      
    </script>
</html>