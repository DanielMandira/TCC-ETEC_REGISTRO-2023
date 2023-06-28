<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$query = $pdo->prepare("SELECT livro.id_livro, livro.titulo_livro, livro.autor_livro, livro.imagem_livro FROM livro Inner JOIN livro_genero on livro.id_livro = livro_genero.id_livro  Inner join genero_livro on genero_livro.codigo_genero = livro_genero.codigo_genero group by id_livro ");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
      $dados[] = array(
        'id_livro' => $res[$i]['id_livro'],
        'titulo_livro' => $res[$i]['titulo_livro'], 
        'autor_livro' => $res[$i]['autor_livro'],        
        'imagem_livro' => $res[$i]['imagem_livro'],
    );

}


if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>