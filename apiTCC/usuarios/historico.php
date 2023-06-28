<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT emprestimo.codigo_emprestimo_devolucao, DATE_FORMAT(emprestimo.data_emprestimo_livro,'%d/%m/%Y'), emprestimo.status_emprestimo, DATE_FORMAT(emprestimo.data_devolucao_livro,'%d/%m/%Y'), livro.id_livro, livro.imagem_livro from emprestimo inner join livro on livro.id_livro = emprestimo.id_livro inner join usuario on usuario.id_usuario = emprestimo.id_usuario where usuario.id_usuario = '$id_usuario'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados[] = array(        
        'codigo_emprestimo_devolucao' => $res[$i]['codigo_emprestimo_devolucao'],
        'data_emprestimo_livro'=> $res[$i]["DATE_FORMAT(emprestimo.data_emprestimo_livro,'%d/%m/%Y')"],
        'status_emprestimo'=> $res[$i]['status_emprestimo'],
        'data_devolucao_livro'=> $res[$i]["DATE_FORMAT(emprestimo.data_devolucao_livro,'%d/%m/%Y')"],
        'id_livro'=> $res[$i]['id_livro'],
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