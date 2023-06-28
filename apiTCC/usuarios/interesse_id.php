<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);
$id_livro= @$_GET['idl'];
$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT * FROM interesse where id_usuario= '".$id_usuario."' and id_livro = '".$id_livro."'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);
for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }

    $dados = array(        
       $res[$i]['id_livro']
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>$dados));
}else{
    $result = json_encode(array('success'=>false, 'dados'=>'0'));
}

echo $result;
?>