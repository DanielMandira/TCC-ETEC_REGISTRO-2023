<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT nome_usuario, sobrenome_usuario, bio_usuario from usuario where id_usuario='$id_usuario'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    $dados = array(        
        'nome_usuario' => $res[$i]['nome_usuario'],
        'sobrenome_usuario' => $res[$i]['sobrenome_usuario'],
        'bio_usuario' => $res[$i]['bio_usuario'],      
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>