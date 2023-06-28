<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT DATE_FORMAT(data_prevista_retirada,'%d/%m/%Y'), agendamento.status_agendamento, agendamento.id_livro, livro.imagem_livro FROM agendamento INNER JOIN livro ON livro.id_livro = agendamento.id_livro WHERE id_usuario = '".$id_usuario."' ORDER BY id_livro DESC");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados[] = array(  
    'data_prevista_retirada' => $res[$i]["DATE_FORMAT(data_prevista_retirada,'%d/%m/%Y')"],
    'status_agendamento' => $res[$i]['status_agendamento'],
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