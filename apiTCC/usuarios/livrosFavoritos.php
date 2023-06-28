<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$_GET['idu'];

$query = $pdo->prepare("SELECT livro.imagem_livro, interesse.id_livro from interesse left join usuario on interesse.id_usuario = usuario.id_usuario left join livro on interesse.id_livro = livro.id_livro where usuario.id_usuario='".$id_usuario."'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }
    $dados[] = array(        
        'imagem_livro' => $res[$i]['imagem_livro'],
        'id_livro' => $res[$i]['id_livro'],        
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;

?>