<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);
$id_livro = @$_GET['idl'];
$query = $pdo->prepare("SELECT comentarios.comentario_user,usuario.id_usuario, usuario.nome_usuario, usuario.sobrenome_usuario, usuario.imagem_usuario from comentarios LEft JOIN usuario ON usuario.id_usuario = comentarios.id_usuario where comentarios.id_livro = '$id_livro'");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($res); $i++) { 
    foreach ($res[$i] as $key => $value) {
    }

    $dados[] = array(        
        'comentario_user' => $res[$i]['comentario_user'],
        'id_usuario' => $res[$i]['id_usuario'],
        'nome_usuario' => $res[$i]['nome_usuario'],
        'sobrenome_usuario' => $res[$i]['sobrenome_usuario'],
        'imagem_usuario' => $res[$i]['imagem_usuario'],
    );
}

if(count($res) > 0){
    $result = json_encode(array('success'=>true, 'dados'=>@$dados));
}else{
    $result = json_encode(array('success'=>false, 'resultado'=>'0'));
}

echo $result;
?>