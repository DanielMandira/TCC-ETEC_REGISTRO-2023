<?php

session_start();
$varida = $_SESSION['id_usuario'];
$idl = $_GET['idl'];
include('../models/conexao.php');
include('../controllers/funcoes.php');
?>
<!DOCTYPE html>
<html>

<head>
    
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Emprestimo</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script>function LerMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLerMais = document.getElementById("btnLerMais");

    if (pontos.style.display === "none"){
        pontos.style.display = "inline";
        btnLerMais.innerHTML = "inline";
        btnLerMais.value = "Ler Mais..."
        maisTexto.style.display = "none";
    }

    else{
        pontos.style.display = "none";
        btnLerMais.value = "Ler menos";
        maisTexto.style.display = "inline";
    }
}</script>
    <link rel='stylesheet' type='text/css' media='screen' href='../Css/emprestimoLivro.css'>
    
    
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <link rel='shortcut icon' href='../Img/logo.png'>
 
</head>

<body>
    
    <header class='headervoltar'>
        <?php 
        
        echo"<div class='divVoltar'>
        <a href='Catalogo.php'><img src='../Img/Emprestimo Livro/seta_Voltar.png' alt=''></a>
    </div>";

        ?>
        
    </header>
    <main class=''>
        <section class='sectionEmprestimo'>
            <div class='divEmprestimo'>
                <div class='img1'>
                    <?php
                    emprestimoLivro();
                    echo"<div class='comentariosLivro'>";
                    comentarioLivro(); 
                    echo"</div>";        ?>            
                    

                
                
            </div>
        </section>

    </main>

</body>

</html>