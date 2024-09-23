<?php

session_start();
include('../models/conexao.php');
include('../controllers/funcoes.php');

$pesquisa = $_POST['pesquisa'];
?>
<!DOCTYPE html>
<html>

<head>

  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Pesquisa</title>
  <!-- Link Swiper's CSS -->
  <link
      rel="stylesheet"
      href="../Css/swiper.css"
    />
  <link rel='stylesheet' type='text/css' media='screen' href='../Css/Catalogo.css'>
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet'>
  <link style='height:1px;width: 10px;' rel='icon' href='Imagens/imgLogo.png'>
  <link rel='shortcut icon' href='../Img/logo.png'>
  
  
</head>

<body class='p-3 m-0 border-0 bd-example'>
  <nav class='navbar bg-light'>
    
    <form  action='pesquisa.php'class='container-fluid' method='post'>
      <div class='input-group' style=" position: relative; display: flex; flex-wrap: wrap; align-items: stretch; width: 97%; justify-content: flex-start;">
        <span class='input-group-text' id='basic-addon1'>Nome do Livro</span>
        <input type='text' name='pesquisa' class='form-control' placeholder='Name' aria-label='Username' aria-describedby='basic-addon1'>
      </div>

      
      <?php
            $varida = $_SESSION["id_usuario"];
            echo"<a href='Catalogo.php' class='meusLivrosSite'><img src='../Img/ConfigUsers/seta_Voltar.png' style='width: 35px; height: 35px;'></a> ";
      ?>
      
    </form>
  </nav>

  <div class='texTLivrosGenero'>
        <h3>Resultado da pesquisa:</h3>
      </div>
      
  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
        resultadoPesquisa()
      ?>

  </section>
  </section>

  <!-- Swiper JS -->
 <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
</script>