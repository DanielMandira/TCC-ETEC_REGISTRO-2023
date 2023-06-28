<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);
$id_livro = @$_GET['idl'];
$query = $pdo->prepare("SELECT livro.titulo_livro, livro.isbn_10, livro.dimensao_livro, livro.autor_livro, livro.sinopse_livro, livro.sobre_autor, livro.editora_livro, livro.numero_paginas, livro.data_publicacao, livro.idioma_livro, livro.imagem_livro, disponibilidade.quantidade_livro from livro left join disponibilidade on disponibilidade.id_livro = livro.id_livro WHERE livro.id_livro = ".$id_livro."");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }

    $dados = array(        
        'titulo_livro' => $res[$i]['titulo_livro'], 
        'isbn_10'=> $res[$i]['isbn_10'],
        'dimensao_livro'=> $res[$i]['dimensao_livro'],
        'autor_livro' => $res[$i]['autor_livro'],        
        'sinopse_livro' => $res[$i]['sinopse_livro'], 
        'sobre_autor' => $res[$i]['sobre_autor'],
        'editora_livro'=> $res[$i]['editora_livro'],
        'numero_paginas'=> $res[$i]['numero_paginas'],
        'data_publicacao'=> $res[$i]['data_publicacao'],
        'idioma_livro'=> $res[$i]['idioma_livro'],
        'imagem_livro' => $res[$i]['imagem_livro'],
        'quantidade_livro' => $res[$i]['quantidade_livro']
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;
?>