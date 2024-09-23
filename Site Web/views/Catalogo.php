<?php

session_start();
include('../models/conexao.php');
include('../controllers/funcoes.php');
?>
<!DOCTYPE html>
<html>

<head>

  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Catálogo</title>
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
            echo"<a href='../index.php' class='meusLivrosSite'><img src='../Img/ConfigUsers/seta_Voltar.png' style='width: 35px; height: 35px;'></a> ";
      ?>
      
    </form>
  </nav>

  <div class='texTLivrosGenero'>
        <h3>Romance</h3>
      </div>
      
  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoRomance()
      ?>

  </section>
  </section>



  <div class='texTLivrosGenero'>
        <h3>Ação</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoAcao()
      ?>

  </section>
  </section>
    
  <div class='texTLivrosGenero'>
        <h3>Ficção Cientifica</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoSciFi()
      ?>

  </section>
  </section>

  
  <div class='texTLivrosGenero'>
        <h3>Aventura</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoAventura()
      ?>

  </section>
  </section>





  <div class='texTLivrosGenero'>
        <h3>Ficção</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoFicção()
      ?>

  </section>
  </section>

  
    
  <div class='texTLivrosGenero'>
        <h3>Terror</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoTerror();
      ?>

  </section>
  </section>
    


  <div class='texTLivrosGenero'>
        <h3>Suspense</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoSuspense();
      ?>

  </section>
  </section>

  
  <div class='texTLivrosGenero'>
        <h3>Enciclopédia</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoEnciclopedia();
      ?>

  </section>
  </section>


  <div class='texTLivrosGenero'>
        <h3>Drama</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoDrama();
      ?>

  </section>
  </section>


  <div class='texTLivrosGenero'>
        <h3>Auto-Ajuda</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoAutoAjuda();
      ?>

  </section>
  </section>


   <div class='texTLivrosGenero'>
        <h3>Fábula</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoFabula();
      ?>

  </section>
  </section>


   <div class='texTLivrosGenero'>
        <h3>Literatura Infantil</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoLiteraturaInfantil();
      ?>

  </section>
  </section>

    <div class='texTLivrosGenero'>
        <h3>Fantasia</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoFantasia();
      ?>

  </section>
  </section>



    <div class='texTLivrosGenero'>
        <h3>Didático</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoDidatico();
      ?>

  </section>
  </section>
 

  

  <div class='texTLivrosGenero'>
        <h3>HQs e Mangás</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
  catalogoHQsemangas();
      ?>

  </section>
  </section>
 
 


  <div class='texTLivrosGenero'>
        <h3>Biografia</h3>
      </div>

  <section id='tudo'>
  <section id='sectionGenero'>

     <?php
 catalogoBiografia();
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


</body>

</html>