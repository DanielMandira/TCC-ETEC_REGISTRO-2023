<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT data_prevista_retirada, status_agendamento, id_livro FROM agendamento WHERE id_usuario = '".$id_usuario."' ORDER BY id_livro DESC");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados[] = array(        
        $res[$i]['id_livro'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>