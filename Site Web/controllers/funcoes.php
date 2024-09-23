
<?php


//$varidl = $_GET["idl"];




function puxarLivro()
{
  header("location:../views/emprestimoLivro.php?idl=" . $varidl);
}
function favLivro()
{

  echo "include('models/conexao.php');";

  $varIda = $_SESSION['id_usuario'];
  $varidl = $_GET['idl'];

  $queryFav = mysqli_query($conexao, "SELECT * FROM interesse where id_usuario = '" . $varIda . "' and id_livro = '" . $varidl . "';");
  $fetchFav = mysqli_fetch_array($queryFav);

  if ($fetchFav > 0) {
    $RemoveFav = mysqli_query($conexao, "DELETE FROM interesse WHERE id_usuario = '" . $varIda . "' and id_livro = '" . $varidl . "';");
    echo "removido";
  } else {
    $AddFav = mysqli_query($conexao, "INSERT INTO interesse (id_usuario,id_livro) values '" . $varIda . "', '" . $varidl . "';");
  }
}
function carousel()
{

  include('models/conexao.php');
  $query = mysqli_query($conexao, "SELECT * FROM livro");
  for ($i = 1; $i <= 3; $i++) {
    //ida=".$varida."&"."idl=".$exibeCatalogo[2]."
    $mostra_livro = mysqli_fetch_array($query);
    echo "<div class='l$i'>
                <a href='controllers/VerificaLivro.php?idl=" . $mostra_livro[0] . "'>
                  <img src='$mostra_livro[11]' alt='' class='img ' style='cursor: pointer;' width='100%' height='150vh'>
                </a>
                <div class='txtl1'>
                  <div class='txtl11'>
                    <p style='font-size:17px;'>$mostra_livro[1]</p><br>
                  </div>
                  <div class='txtl12'>
                    <p style='font-size:17px;'>Autor: $mostra_livro[4]</p>
                  </div> 
                </div>  
              </div>";
  }
}

function emprestimoLivro()
{
  include('../models/conexao.php');

  $idl = $_GET["idl"];
  $varida = $_SESSION["id_usuario"];
  $varidl = $_GET["idl"];
  $queryEmprestimo = mysqli_query($conexao, "SELECT * FROM livro left join disponibilidade on disponibilidade.id_livro = livro.id_livro left join livro_genero on livro_genero.id_livro = livro.id_livro left join genero_livro on livro_genero.codigo_genero = genero_livro.codigo_genero   where livro.id_livro = $idl");
  $exibe = mysqli_fetch_array($queryEmprestimo);

  $queryFav = mysqli_query($conexao, "SELECT * FROM interesse where id_usuario = '" . $varida . "' and id_livro = '" . $varidl . "';");
  $fetchFav = mysqli_fetch_array($queryFav);

  echo "<img src='$exibe[11]' alt=''>
        </div>
        <div class='infoLivro'>

      
            <div class='nomeLivro'>
                <h2>Título: $exibe[1]</h2>
            </div>

            <div class='divFav'>
            <Label>Favoritar</Label>";

  if ($fetchFav > 0) {

    echo "<a href='../controllers/Favoritar.php?idl=" . $idl . "'><img src='../Img/Emprestimo Livro/coracao-favorito-vermelho.png' alt=''></a>
            </div>";
  } else {
    echo "<a href='../controllers/Favoritar.php?idl=" . $idl . "'><img src='../Img/Emprestimo Livro/coracao-favorito.png' alt=''></a>
              </div>";
  }
  echo "
            <br><br><br><br><br><br>
            
            <div class='infoPt1'>
            
            
            <div class='nomeAutor'>
                <h3>Autor: $exibe[4]</h3>
            </div>
            <div class='editoraLivro'>
              <h3>Editora : $exibe[7]</h3>
            </div>
            <div class='numPaginas'>
              <h3>Número de páginas: $exibe[8]
            </div>
            <div class='idioma'>
              <h3>Idioma:$exibe[10]
            </div>
           
            </div>
            <div class='infoPt2'>
            <div class='dataPubli'>
              <h3>Publicado em :$exibe[9]
            </div>
            <div class='dimensoesLivro'>
              <h3>Dimensões: $exibe[3]
            </div>
            <div class='isbn10'>
              <h3>Isbn de 10 dígitos: $exibe[2]
            </div>
            </div>

           
            ";
  // dimensoes $exibe[3]

  if ($exibe[4] >= 0) {
    $queryAgendamento = mysqli_query($conexao, "SELECT * FROM agendamento where id_usuario = $varida and id_livro = $varidl;");
    $fetchAgendamento = mysqli_fetch_array($queryAgendamento);

    $queryEmprestimo = mysqli_query($conexao, "SELECT *  FROM emprestimo where id_usuario = $varida and id_livro = $varidl;");
    //$fetchEmprestimo = null!==(mysqli_fetch_array($queryEmprestimo))? mysqli_fetch_array($queryEmprestimo) : FALSE;
    $fetchEmprestimo = mysqli_fetch_array($queryEmprestimo);

    echo "<div class='agendamento'>";

    if (($fetchAgendamento == 0) && ($fetchEmprestimo == 0 || $fetchEmprestimo[2] == "Finalizado")) {

      echo "<div class='disponibilidadeLivro'>
                      <h3 style='color: green'>Disponível (" . $exibe[13] . " unidades disponíveis!)</h3>
                    </div>
                    <div class='divbotaoAluga'>
                      <a href='../controllers/Agendamento.php?idl=$idl'><input class='botaoAluga' type='button' value='Alugar'></a>
                    </div>";
    } else if (($fetchEmprestimo == 0 || $fetchEmprestimo[2] == "Finalizado") && ($fetchAgendamento[2] == "0000-00-00")) {
      echo "<div class='disponibilidadeLivro'>
                    <h3 style='color: #3ea2b8'>Empréstimo agendado, aguarde data para retirada! (" . $exibe[13] . " unidades disponíveis!)</h3>
                  </div>
                  <div class='divbotaoAgendado'>
                  <a href='../controllers/CancelarAgendamento.php?idl=$idl'><input class='botaoAgendado' type='button' value='Cancelar'></a>
                  </div>";
    } else if (($fetchEmprestimo == 0 || $fetchEmprestimo[2] == "Finalizado") && ($fetchAgendamento[2] != "0000-00-00")) {
      echo "<div class='disponibilidadeLivro'>
                    <h3 style='color: #3ea2b8'>Empréstimo agendado, retire o livro em <b>" . $data = implode('/', array_reverse(explode('-', $fetchAgendamento[2]))) . "</b> (" . $exibe[13] . " unidades disponíveis!)</h3>
                  </div>
                  <div class='divbotaoAgendado'>
                  <a href='../controllers/CancelarAgendamento.php?idl=$idl'><input class='botaoAgendado' type='button' value='Cancelar'></a>
                  </div>";
    } else if (($fetchEmprestimo[2] == "Emprestado") && ($fetchAgendamento == 0)) {
      echo "<div class='disponibilidadeLivro'>
                    <h3 style='color: #612e4f'>Livro emprestado! (" . $exibe[13] . " unidades disponíveis!)</h3>
                  </div>
                  <div class='divbotaoDevolucao'>
                    <a href='../controllers/Devolucao.php?idl=$idl'><input class='botaoDevolucao' type='button' value='Devolver' ></a>
                  </div>";
    } else if (($fetchEmprestimo[2] == "Devolvido"  || $fetchEmprestimo[3] == "") && ($fetchAgendamento == 0)) {
      echo "<div class='disponibilidadeLivro'>
                    <h3 style='color: #612e4f'>Insira o código " . $fetchEmprestimo[0] . " no teclado da biblioteca para devolver!</h3>
                    <div class='divbotaoDevolucao'>
                    <a href='../controllers/CancelarDevolucao.php?idl=$idl'><input class='botaoDevolucao' type='button' value='Cancelar'></a>
                    </div>
                  </div>";
    }
    /*else if(($fetchEmprestimo[2] == "Devolvido")&& ($fetchEmprestimo[3]!="") && ($fetchAgendamento == 0)){
                  echo "<div class='disponibilidadeLivro'>
                  <h3 style='color: #612e4f'>Devolução agendada, entregue o livro em <b>".$data=implode('/',array_reverse(explode('-',$fetchEmprestimo[3])))."</b> (".$exibe[13]." unidades disponíveis!)</h3>
                 
                    <div class='divbotaoDevolucao'>
                    <a href='../controllers/CancelarDevolucao.php?idl=$idl'><input class='botaoDevolucao' type='button' value='Cancelar'></a>
                    </div>
                  </div>";
                    
                }*/
  } else {
    echo "<div class='disponibilidadeLivro'>
                      <h3 style='color: red'>Indisponível</h3>
                   </div>";
  }




  echo "

            </div>
            
            <div class='disponibilidade'>
            </div>
        </div>
    </div>
</section>
<section class='sectionResumo'>
    <div class='divResumo'>
        <div class='txttituloResumo'>
            <h1 class='h2titulosinopse'>Sinopse:</h1>
        </div>
        <div class='txtsinopse'>

            <h2 class='h2sinopse'>" . substr($exibe[5], 0, 500) . "<span id='pontos'>...</span><span id='mais'>" . substr($exibe[5], 500, 7500) . " 
            
            </h2>
            
        </div>

        <div class='txtNumeroPaginas'>
            <h2 class='numPaginas'>" . $exibe[9] . "</h2>
        </div>
           </span>
            
           
            
            
           <div class='divbtn_lerMais'> 
                    
               
                    <input class='btn_lerMais' type='button' onclick='LerMais()' id='btnLerMais' value='Ler Mais...' />
                    
                </div>
                <br><br><br>
                <div class='txttituloResumo'>
            <h1 class='h2titulosinopse'>Comentários:</h1>
        </div>";
}

function comentarioLivro()
{
  include('../models/conexao.php');
  $varIda = $_SESSION["id_usuario"];
  $varidl = $_GET["idl"];
  $queryComentario = mysqli_query($conexao, "SELECT * FROM comentarios
   left join usuario on comentarios.id_usuario = usuario.id_usuario where id_livro = '" . $varidl . "'");
  $dadosComentario = mysqli_fetch_array($queryComentario);
  echo "<div class='criar_coment' style='margin-top: 100px; margin-bottom: 50px; '>


<div class='info_coment'>
    <div class='comentariosug'>
        <p><b>
        Deixe um comentário!
            </b></p>
    </div>
    
    
</div>


<form action='../controllers/Comentar.php?idl=$varidl' method='post'>
<div class='area_coment'>
<textarea name='comentario'>
</textarea>
</div>
</div>

<div class='btn_comment'> 
                        <input type='submit' value='Enviar' onclick>
                    </div>
</form>";
  while ($fetchComentario = mysqli_fetch_array($queryComentario)) {
    echo "

    
    <div class='users_coment' style='margin-top: 100px; margin-bottom: 50px; '>

    <div class='img_user'>
        <img src='" . $fetchComentario[12] . "' style='object-fit: cover; width:150px; height:150px; border-radius:80px; padding:10px;' alt=''>
    </div>
    <div class='info_user' style='margin: 5px;'>
        <div class='nome_user'>
            <p><b>
                " . $fetchComentario[4] . " " . $fetchComentario[5] . "
                </b></p>
        </div>
        
    </div>

    <div class='coment_user'>

        <p>
           " . $fetchComentario[2] . "
        </p>
    </div>
    </div>";
  }
}



function historicoAgendado()
{

  include('../models/conexao.php');
  $varIda = $_SESSION["id_usuario"];
  $queryHistorico = mysqli_query($conexao, "SELECT * FROM agendamento left join livro on agendamento.id_livro=livro.id_livro WHERE id_usuario = $varIda ORDER BY codigo_agendamento DESC;");

  while ($exibeHistorico = mysqli_fetch_array($queryHistorico)) {
    echo
    "<div class='divEmprestimo'>
      <div class='img1'>
      <img src='" . $exibeHistorico[16] . "'<section class='sectionEmprestimo'>
      
      </div>
      <div class='infoLivro'>
        <div class='nomeLivro'>
          <h3>Livro: " . $exibeHistorico[6] . "</h3>
        </div>
        <div class='datas'>
        <h3>Data para retirada: ";

    if ($exibeHistorico[2] != '0000-00-00') {
      echo $data = implode('/', array_reverse(explode('-', $exibeHistorico[2])));
    } else {
      echo "não definida";
    }


    echo "</h3>
      </div>
      </div>
      </div>
</div>
      ";
  }


  echo "



</section> <br>";
}


function historicoConcluidos()
{

  include('../models/conexao.php');
  $varIda = $_SESSION["id_usuario"];
  $queryHistorico = mysqli_query($conexao, "SELECT * FROM emprestimo left join livro on emprestimo.id_livro=livro.id_livro WHERE id_usuario = $varIda and status_emprestimo = 'Finalizado' ORDER BY emprestimo.data_emprestimo_livro DESC;");

  while ($exibeHistorico = mysqli_fetch_array($queryHistorico)) {
    echo
    "<div class='divEmprestimo'>
      <div class='img1'>
      <img src='" . $exibeHistorico[17] . "'<section class='sectionEmprestimo'>
      
      </div>
      <div class='infoLivro'>
        <div class='nomeLivro'>
          <h3>Livro: " . $exibeHistorico[7] . "</h3>
        </div>
        <div class='datas'>
        <h3>Data de empréstimo: " . $data = implode('/', array_reverse(explode('-', $exibeHistorico[1]))) . "</h3>
      </div>
      <div class='datas'>
        <h3>Data de devolução: " . $data = implode('/', array_reverse(explode('-', $exibeHistorico[3]))) . "</h3>
      </div>
      </div>
      </div>
</div>
      ";
  }


  echo "



</section> <br>";
}

function historicoEmAndamento()
{

  include('../models/conexao.php');
  $varIda = $_SESSION["id_usuario"];
  $queryHistorico = mysqli_query($conexao, "SELECT * FROM emprestimo left join livro on emprestimo.id_livro=livro.id_livro WHERE id_usuario = $varIda and status_emprestimo = 'Emprestado' or status_emprestimo = 'Devolvido' ORDER BY emprestimo.data_emprestimo_livro DESC;");

  while ($exibeHistorico = mysqli_fetch_array($queryHistorico)) {
    echo
    "<div class='divEmprestimo'>
      <div class='img1'>
      <img src='" . $exibeHistorico[17] . "'<section class='sectionEmprestimo'>
      
      </div>
      <div class='infoLivro'>
        <div class='nomeLivro'>
          <h3>Livro: " . $data = $exibeHistorico[7] . "</h3>
        </div>
        <div class='datas'>
          <h3>Data de empréstimo: " . $data = implode('/', array_reverse(explode('-', $exibeHistorico[1]))) . "</h3>
        </div>
        <div class='datas'>
          <h3>Data de devolução: não devolvido</h3>
        </div>
      </div>
      </div>
</div>
      ";
  }


  echo "



</section> <br>";
}

function resultadoPesquisa()
{
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $pesquisa = $_POST['pesquisa'];
  $queryPesquisa = mysqli_query($conexao, "SELECT * FROM livro WHERE titulo_livro LIKE '%" . $pesquisa . "%'");

  if(mysqli_num_rows($queryPesquisa)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryPesquisa)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibePesquisa = mysqli_fetch_array($queryPesquisa)) {
    
    
    (mysqli_num_rows($queryPesquisa)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibePesquisa[0] . "'><img src='" . $exibePesquisa[11] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibePesquisa[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibePesquisa[1] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryPesquisa)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
}

function catalogoRomance(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Romance'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }



function catalogoSciFi(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Ficção Científica'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }



function catalogoTerror(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Terror'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }


function catalogoSuspense(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Suspense'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }


function catalogoAcao(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Ação'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }






function catalogoDrama(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Drama'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }



function catalogoAventura(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Aventura'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }



function catalogoAutoAjuda(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Auto-ajuda'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }


  
function catalogoFabula(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Fábula'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }



function catalogoLiteraturaInfantil(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Literatura Infantil'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }


function catalogoNovela(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Novela'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }

function catalogoFicção(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Ficção'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }

function catalogoEnciclopedia(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Enciclopédia'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }


function catalogoFantasia(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Fantasia'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }

function catalogoDidatico(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Didático'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }




function catalogoHQsemangas(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Hq´s e Mangás'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }

function catalogoBiografia(){
  include('../models/conexao.php');
  $varida = $_SESSION["id_usuario"];
  $queryCatalogo = mysqli_query($conexao, "SELECT livro.id_livro, livro.imagem_livro, livro.titulo_livro,  disponibilidade.quantidade_livro FROM livro left JOIN livro_genero ON livro_genero.id_livro=livro.id_livro left join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero left join disponibilidade on disponibilidade.id_livro = livro.id_livro  WHERE genero_livro.nome_genero='Biografia'");
  

  if(mysqli_num_rows($queryCatalogo)!=0){
    
    echo "<section>";

    if(mysqli_num_rows($queryCatalogo)<3){}

      else{echo"<div class='swiper mySwiper container'>";}

      echo"<div class='swiper-wrapper content'>      
      ";

  while ($exibeCatalogo = mysqli_fetch_array($queryCatalogo)) {
    (mysqli_num_rows($queryCatalogo)<3) ? $divContem="<div class='swiper-slide card-min' id='min'>" : 
    
    $divContem = "<div class='swiper-slide card'>";
echo $divContem."
          <div class='card-content'>
            <div class='image'>
            <a href='emprestimoLivro.php?idl=" . $exibeCatalogo[0] . "'><img src='" . $exibeCatalogo[1] . "' alt=''></a>
            </div>
           <div class='disp-icons'>";
    if ($exibeCatalogo[3] > 0) {
      echo "
           <img src='https://cdn-icons-png.flaticon.com/512/845/845646.png' width='256' height='256' alt='Livro Disponível!' title='Livro Disponível!'>";
    } else {
      echo "<img src='https://cdn-icons-png.flaticon.com/512/6467/6467134.png' width='256' height='256' alt='Livro Indisponível!' title='Livro Indisponível!'>";
    }
    echo "</div>
            <div class ='nome-livro'> 
            <span class='nome'>" . $exibeCatalogo[2] . "</span>
            </div>
          </div>
        </div>";
  }

  (mysqli_num_rows($queryCatalogo)<3) ? $div="" : $div="</div>";
  echo $div."
  </div>
  
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
  </section>
  ";
  }
  
  else{
  echo"<h3>Não há livros para exibir!</h3>";
  }
  }
  


function CadastroLogin()
{
}
