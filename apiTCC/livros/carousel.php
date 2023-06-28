<?php
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$query = $pdo->prepare("SELECT count(interesse.id_livro), livro.id_livro, livro.imagem_livro FROM interesse INNER JOIN livro ON interesse.id_livro = livro.id_livro GROUP BY interesse.id_livro HAVING COUNT(interesse.id_livro)>0 ORDER BY COUNT(interesse.id_livro) DESC limit 4");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
      $dados[]= array(
        'count(interesse.id_livro)' => $res[$i]['count(interesse.id_livro)'],
        'id_livro' => $res[$i]['id_livro'],
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