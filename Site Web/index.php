<?php
session_start();
include('./models/conexao.php');
include('./controllers/funcoes.php');
?>
<!DOCTYPE html>
<html>

<head>


    <meta charset='utf-8'>
    <link rel='shortcut icon' href='../Img/logo.png'>
    <title>Biblio-Tec</title>
    <!-- Fonte -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">

    <!--Icones-->
    <link rel='stylesheet' type='text/css' media='screen' href='./Css/index.css'>
</head>
<body>
    <div class='container'>
        <header>
            <div class='headerDiv'>
                <div class='Logo'>
                    <img src='img/logo.png' style="width: 53px; height: 35px"/>
                    <b><a href='' class='nomeSite'>BiblioTec</a></b>
                </div>
                <?php 
                echo"<div>".
                        "<ul class='Menu'>".
                            "<li>".
                                "<a href='./controllers/VerificaCatalogo.php'
                                 class='contatoSite'>Catálogo Digital</a>".
                            "</li>".
                            "<li>".
                                "<a href='./views/Cadastro.php' class='contaSite'>Cadastro/Login</a>".
                            "</li>".
                            " <li>". 
                            "<a href='controllers/VerificaConfig.php' class='meusLivrosSite'>Configurações</a>".
                            "</li>".
                        "</ul>".
                    "</div>";
                ?>        
            </div>


        </header>

        <main>
            <div class='slider'>
                <div class='slides'>
                    <input type='radio' name='radio-btn' id='radio1'>
                    <input type='radio' name='radio-btn' id='radio2'>
                    <input type='radio' name='radio-btn' id='radio3'>
                    <input type='radio' name='radio-btn' id='radio4'>

                    <div class='slide first'>
                        <img src='./Img/Index/carousel.png' alt='imagem 1'>
                    </div>
                    <div class='slide'>
                        <img src='./Img/Index/carousel5.png' alt='imagem 2'>
                    </div>
                    <div class='slide'>
                        <img src='./Img/Index/carousel4.png' alt='imagem 3'>
                    </div>
                    <div class='slide'>
                        <img src='./Img/Index/carousel2.png' alt='imagem 4'>
                    </div>
                    <div class='navigation-auto'>
                        <div class='auto-btn1'></div>
                        <div class='auto-btn2'></div>
                        <div class='auto-btn3'></div>
                        <div class='auto-btn4'></div>
                    </div>

                </div>

                <div class='manual-navigation'>
                    <label for='radio1' class='manual-btn'></label>
                    <label for='radio2' class='manual-btn'></label>
                    <label for='radio3' class='manual-btn'></label>
                    <label for='radio4' class='manual-btn'></label>

                </div>
            </div>



            <section class='prateleira_livros'>
                <div class='prateleira_text'>
                    <p> Encontre o seu livro favorito na nossa prateleira digital</p>
                </div>
                <div class='fundolivros'>
                    <?php
                    carousel()
                    ?>
                </div>
                <div class='divtxt'>
                    <p>
                        Os livros mais desejados estão a um clique de você!
                    </p>
                </div>
                <div class='divbtn'>
                    <a href='controllers/VerificaCatalogo.php'><input type='button' value='Catálogo Digital'></a>
                </div>


            </section>
            <section class='sctcomt' style='margin-top: 50px;'>
                <div class='comentarios_fixos'>
                    <div class='box-1'>
                        <p>
                            Veja todas as obras mais lidas pelas pessoas, e também os comentarios e opiniões sobre as literaturas.
                        </p>
                    </div>
                    <div class='box-2'>
                        <p>
                            Seja um comentarista também e deixe a sua opinião nos livros!
                        </p>
                    </div>
                </div>


                <div class='users_coment' style='margin-top: 100px; margin-bottom: 50px; '>

                    <div class='img_user'>
                        <img src='./Img/Index/user_img.png' style='object-fit: cover; width:150px; height:150px;' alt=''>
                    </div>
                    <div class='info_user' style='margin: 5px;'>
                        <div class='nome_user'>
                            <p>
                                Rafael Moreira Filho
                            </p>
                        </div>
                        <div class='curso_user'>
                            <p>
                                Estudante de Administração na Etec de Registro
                            </p>
                        </div>
                    </div>

                    <div class='coment_user'>

                        <p>
                            Gostei muito do Site, tem um design muito bonito e intuitivo.<br>
                            Aconselho vocês a baixarem o App, principalmente quem frequenta a Etec <br>
                            e curte ler alguns livros.
                        </p>
                    </div>
                    <!-- <div class='btn_comment'> 
                        <input type='button' value='Ler Mais...'>
                    </div>-->

                </div>


            </section>


        </main>
        <footer>

            <div class='footer'>
                <div class='fttxt'>
                    <p>Não fique sem perder nada<br>
                        Confira todas as nossas atualizações diárias!</p>
                </div>
            </div>
        </footer>
    </div>

    <script src='../Js/script.js'></script>
</body>

</html>