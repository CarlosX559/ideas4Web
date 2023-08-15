<?php
if (isset($_POST["email"]) && !empty(trim($_POST["email"])) && !empty($_POST["nome"]) && !empty($_POST["assunto"])) {

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $assunto = addslashes($_POST["assunto"]);
    $textarea = addslashes($_POST["mensagem"]);


    $email_to = "geral@ideas4web.pt";

    $header = "Content-Type: text/html; charset=utf-8" . "\r\n";
    $header .= "From:" . $email . "\r\n" .
        "Reply-To:" . $email . "\e\n" .
        "X=Mailer:PHP/" . phpversion();

    // Dados que serão enviados.
    $body = "<strong>Nome: </strong>" . $nome . "</br>" .
        "<strong>Email: </strong>" . $email . "</br>" .
        "<strong>Telefone: </strong>" . $telefone . "</br>" .
        "<strong>Mensagem: </strong>" . $textarea;

    //Enviando o email.
    $status = mail($email_to, $assunto, $body, $header);

}
if ($status) {
    //header("Location:index.php?status=sucesso");
    header("Location: contato.html");
} else {
    //header("Location:index.php?status=erro");
    header("Location: contato.html");
}
?>