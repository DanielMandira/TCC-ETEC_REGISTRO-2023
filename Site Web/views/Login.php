<?php

session_start();
session_destroy();
include('../models/conexao.php');

?>
<!DOCTYPE html>
<html>
<head>
 <meta charset='utf-8'>
    <title>Page Title</title>
       <!-- Fonte -->
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">

       <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
       <!--Icones-->
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
       <link rel='shortcut icon' href='../Img/logo.png'>
    <link rel='stylesheet' type='text/css' media='screen' href='../Css/Cadastro.css'>
    <script src='main.js'></script>
</head>
<body>
    <header class="descricao">
        <div class="part1">
            <div class="nomePag">
            <a href="../index.php" style="color:white; text-decoration:none;"><h4>Biblio-Tec</h4></a>
                <h2>Comece a sua jornada agora!!</h2>
                <p class="TxtTitulo">Fique por dentro de tudo o que acontece na nossa comunidade</p>
            </div>
        </div>
        <div class="forms">
            <div class="formulario">
                <h2 class="TituloForm">
                    Olá, Estudante!!
                </h2>
                <p class="TxtForm">
                    Seja bem vindo ao nosso mundo
                </p> 
            </div>
            <form action='../controllers/LogarUser.php' method='post'>
                <div class="formflex">
                    <div class="form-group">
                        <label for="email"><p style="font-size:20px;">E-mail(Institucional): </p></label>
                        <input class="imputForm" type="email" name="email" placeholder="Ex: xxxx.yyyy101@etec.sp.gov.br"> 
                    </div>
                    <div class="form-group">
                        <label for="senha"><p style="font-size:20px;">Senha: </p></label>
                        <input class="imputForm" type="password" name="senha" placeholder=""> 
                    </div>
                </div>
               
                <input type="submit" class="btn" value="Enviar">

                
                <?php if($_GET['msg'] =='rr'){?>
                    
                <div class="text-danger">
                    <h6>Email ou senha incorretos</h6>
                </div>
           <?php } ?>

            </form>
        </div>
            
            
        </div>
        

    </header>
</body>
</html>


