<?php
session_start();
include('../models/conexao.php');
include('../controllers/funcoes.php');
if (isset($_SESSION["situacao"])){

    $varida = $_SESSION['id_usuario'];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Configurações</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='../Css/configUsers.css'>
    <link rel='shortcut icon' href='../Img/logo.png'>
</head>

<body style='max-width: 90%; margin: 0 auto;'>
    <header>
        <section class='meuPerfil'>
            <div class='navtopvoltar'>
                <div class='txtMeuperfil'>
                    <p>
                        Meu Perfil
                    </p>
                </div>
            
                
            <?php
                        $queryUser = mysqli_query($conexao, "SELECT * FROM usuario WHERE id_usuario = '$varida'");
            $exibeUser = mysqli_fetch_array($queryUser);

            echo"<div class='divsetavoltar'>
            <a href='../index.php'>
                <img src='../Img/ConfigUsers/seta_Voltar.png' style='width: 35px; height: 35px;' alt=''>
            </a>
        </div>

    </div>";

            echo "<div class='infoUsers1'>
        <div class='imgUsers'>
        <img src='$exibeUser[9]' style='border-radius: 80px;  object-fit: cover; width:150px; height:150px;' alt=''>
        </div>
        <div class='nomeUsers'>
        <p>
        $exibeUser[1] $exibeUser[2]
        </p>
        </div>
        </div>
        </section>
        </header>
        <article>
        <section class='secInfoPessoais'>
        <div class='divInfopessoais'>
        <div class='tituloTxtinfoP'>
        <p>
        Informações Pessoais
        </p>
        </div>
        <div class='txtInfopessoais'>
        <div class='infoNome'>
        <div class='styleInfo'> <p>Nome:</p><p class='Info'>  $exibeUser[1]</p></div>
        </div>
        <div class='infoSobrenome'>
        <div class='styleInfo'> <p>Sobrenome:</p><p class='Info'> $exibeUser[2]</p></div>
        </div>
        <div class='infoGenro'>
        <div class='styleInfo'> <p>Genero:</p><p class='Info'> $exibeUser[7]</p></div>
        </div>
        <div class='infoEmail'>
        <div class='styleInfo'>  <p>E-mail:</p><p class='Info'> $exibeUser[3]</p></div>
        </div>
        ";
            ?>

            </div>
            </div>
        </section>
        <section class='secInfoPessoais'>
            <div class='divInfopessoais'>
                <div class='tituloTxtinfoP'>
                    <p>
                        Emprestimos de Livros
                    </p>
                </div>
                <div class='txtInfopessoais'>
                    <div class='infoNome'>
                        <?php
                        $queryEmprestimo = mysqli_query($conexao, "SELECT * FROM emprestimo inner join livro on emprestimo.id_livro=livro.id_livro where id_usuario = 2 ORDER BY data_emprestimo_livro desc LIMIT 1;");
                        while ($exibeEmprestimo = mysqli_fetch_array($queryEmprestimo)) {
                            echo "<div class='styleInfo'>
                                      <p>Livro:</p>
                                      <p class='Info'> $exibeEmprestimo[6]</p>
                                  
                    </div>
                    <div class='infoSobrenome'>
                        <div class='styleInfo'>
                            <p>Autor:</p>
                            <p class='Info'> $exibeEmprestimo[9]</p>
                        </div>
                    </div>
                    <div class='infoEmail'>
                        <div class='styleInfo'>
                        <p >Data de Emprestimos:</p>
                        <p class='Info'> $exibeEmprestimo[2]</p>
                    </div>
                </div>
                <div class='infoSenha'>
                    <div class='styleInfo'>
                        <p >Data de Devolução:</p >
                        <p class='Info'> $exibeEmprestimo[1]</p>
                    </div>

                    </div>
                    <div class='divbtn'>
                       <a href='historico.php'><input type='button' value='Histórico completo'></a>
                    </div>
            </div>
            
            </div>
            </div>
            </section>";
                        }
                        ?>
                        <section class='secLivrosfavo'>
                            <div class='divLivrosfavo'>

                                <div class='tituloTxtLivrosfavo'>
                                    <p>
                                        Livros favoritos
                                    </p>
                                </div>
                                <div class='infofavo'>
                                    <?php
                                            $queryFav = mysqli_query($conexao, "SELECT interesse.id_usuario, interesse.id_livro, livro.id_livro, livro.titulo_livro, livro.imagem_livro FROM interesse inner join livro on interesse.id_livro= livro.id_livro where id_usuario = $varida;");
                                            while($exibeFav = mysqli_fetch_array($queryFav)) {
                                                echo"<div class='favoTudo1'>
                                                        <div class='sectionLivro'>
                                                            <div class='txtfavo'>
                                                                <p>Livro: $exibeFav[3]</p>
                                                            </div>
                                                            <div class='img1'>
                                                                <a href='emprestimoLivro.php?idl=".$exibeFav[2]."'>
                                                                    <img src='$exibeFav[4]' style='object-fit: fill;width: 200px; height: 250px;' alt=''>
                                                            </a>
                                                            </div>
                                                        </div>
                                                     </div";
                                            }
                                      ?>
                                        </div>
                            </div>
                            <!---->
                        </section>
                        </article>

</body>

</html>

<?php } 

else{ echo"Faça login para visualizar o seu perfil!";
    session_destroy();

}?>
