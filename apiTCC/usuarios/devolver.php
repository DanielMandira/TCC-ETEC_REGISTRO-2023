<?php 

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$id_usuario = @$postjson['idu'];
$id_livro = @$postjson['idl'];
try{

    $query1 = $pdo->prepare("SELECT codigo_emprestimo_devolucao FROM emprestimo WHERE id_livro = '$id_livro' AND id_usuario = '$id_usuario' AND status_emprestimo = 'Emprestado' ");
    
   $query1->execute();
   
   $res = $query1->fetchAll(PDO::FETCH_ASSOC);
   $cod = $res[0]['codigo_emprestimo_devolucao'];
}
finally{

    
    $query2 = $pdo->prepare("UPDATE emprestimo SET status_emprestimo = 'Devolvido' where id_livro = '$id_livro' and id_usuario = '$id_usuario' AND codigo_emprestimo_devolucao = $cod");
    
    $query2->execute();
    
    $result = json_encode(array('mensagem'=>'Salvo com sucesso!', 'sucesso'=>true));
   echo $result;
}
?>