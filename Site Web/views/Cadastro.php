<?php
session_start();
session_destroy();
include('../models/conexao.php');
include('../controllers/funcoes.php');
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
        <div class='forms'>
            <form  action='../controllers/CadastrarUser.php' method='post'>
                <div class='formulario'>
                    <h2 class='TituloForm'>
                        Olá, Estudante!!
                    </h2>
                    <p class='TxtForm'>
                        Seja bem vindo ao nosso mundo
                    </p> 
                </div>
                <br>
                <h6 class='txtoender'>
                  Dados Pessoais:
                </h6>
               <div class='formflex'>
                <div class='form-group'>
                    <label for='name'><p style='font-size:20px;'>Nome: </p></label>
                    <input class='imputForm' type='text' name='Nome' placeholder=''> 
                </div>
                <div class='form-group'>
                    <label for='sobrenome'><p style='font-size:20px;'>Sobrenome: </p></label>
                    <input class='imputForm' type='text' name='Sobrenome' placeholder=''> 
                </div>
                <div class='form-group'>
                <label for='dataNasc'><p style='font-size:20px;'>Gênero: </p></label>
                    <div class="custom_select" >
                        <select>
                            <option  style="display:none;">Selecio um Gênero:</option>
                            <option value="1" name="genero1">MASCULINO</option>
                            <option value="2" name="genero2">FEMININO</option>
                            <option value="3" name="genero3">OUTROS</option>
                        </select>
                    </div>
                </div>
                <div class='form-group'>
                    <label for='dataNasc'><p style='font-size:20px;'>Data de Nascimento: </p></label>
                    <input class='imputForm' type='date' name='DataNasc' placeholder=''> 
                </div>
                <div>
                    <br>
                <h6 class='txtoender'>
                  Endereço:
                </h6>
                </div>
                <div class='form-group'>
                    <label for='dataNasc'><p style='font-size:20px;'>Cidade: </p></label>
                    <input class='imputForm' type='text' name='Cidade' placeholder='Cidade'> 
                </div>
                <div class='form-group'>
                    <label for='dataNasc'><p style='font-size:20px;'>Bairro: </p></label>
                    <input class='imputForm' type='text' name='Bairro' placeholder='Bairro'> 
                </div>
                <div class='form-group'>
                    <label for='dataNasc'><p style='font-size:20px;'>Rua: </p></label>
                    <input class='imputForm' type='text' name='Rua' placeholder='Rua'> 
                </div>
                <div class='form-group'>
                    <label for='dataNasc'><p style='font-size:20px;'>Número: </p></label>
                    <input class='imputForm' type='text' name='Numero' placeholder='Número'> 
                </div>

                <div>
                    <br>
                <h6 class='txtoender'>
                  Login:
                </h6>
                </div>
                
                <div class='form-group'>
                    <label for='celular'><p style='font-size:20px;'>Número do Celular: </p></label>
                    <input class='imputForm' type='text' name='Celular' placeholder='Ex: 13 996 229224'> 
                </div>
                
                <div class='form-group'>
                    <label for='email'><p style='font-size:20px;'>E-mail(Institucional): </p></label>
                    <input class='imputForm' type='email' name='email' placeholder='Ex: xxxx.yyyy101@etec.sp.gov.br'> 
                </div>
                <div class='form-group'>
                    <label for='senha'><p style='font-size:20px;'>Senha: </p></label>
                    <input class='imputForm' type='password' name='senha' placeholder=''> 
                </div>
                <div class='form-group'>
                    <label for='senha'><p style='font-size:20px;'>Confirmar Senha: </p></label>
                    <input class='imputForm' type='password' name='Confirmesenha' placeholder=''> 
                </div>
                </div>
                <input type='submit' class='btn' value='Enviar'>
                <div class='outraescolha'>
                    <h2 class='txtoutraescolha'>Ou</h2>
                    <div class='icons'>
                        <a href='http://'><i id='face' class='bi bi-facebook'></i></a>
                        <a link rel='stylesheet' href=''><i id='google' class='bi bi-google'></i></a>
                    </div>
                    Já é um Usuário?<a link rel='stylesheet' href='Login.php?msg=n' >Entrar </a>
                    
                </div>
            </form>
        </div>
            
            
        </div>
        

    </header>
    
</body>
</html>