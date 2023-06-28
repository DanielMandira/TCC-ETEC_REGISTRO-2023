<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];
$id_livro = @$_GET['idl'];

$query = $pdo->prepare("SELECT DATE_FORMAT(data_prevista_retirada,'%d/%m/%Y'), status_agendamento FROM agendamento WHERE id_usuario = '".$id_usuario."' and id_livro = '".$id_livro."'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 

    $dados = array(        
        'data_prevista_retirada' => $res[$i]["DATE_FORMAT(data_prevista_retirada,'%d/%m/%Y')"],
        'status_agendamento' => $res[$i]['status_agendamento'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=> $dados));
}else{
    $result = json_encode(array('success'=>false, 'dados'=>'0'));
}

echo $result;

?>