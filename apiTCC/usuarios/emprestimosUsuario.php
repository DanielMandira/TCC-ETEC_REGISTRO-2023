<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT livro.id_livro,  DATE_FORMAT(emprestimo.data_emprestimo_livro,'%d/%m/%Y'), livro.titulo_livro, livro.autor_livro, livro.imagem_livro FROM livro INNER JOIN emprestimo ON emprestimo.id_livro = livro.id_livro WHERE emprestimo.id_usuario = '".$id_usuario."' AND emprestimo.status_emprestimo = 'Emprestado'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados[] = array(        
        
        'id_livro'=> $res[$i]['id_livro'],
        'data_emprestimo_livro'=> $res[$i]["DATE_FORMAT(emprestimo.data_emprestimo_livro,'%d/%m/%Y')"],
        'titulo_livro'=> $res[$i]['titulo_livro'],
        'autor_livro'=> $res[$i]['autor_livro'],
        'imagem_livro'=> $res[$i]['imagem_livro'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>