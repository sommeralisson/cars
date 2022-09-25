<?php
  include './php/connection.php';

?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Trading</title>

  <!-- Favicon / Css -->
  <link rel="icon" type="image/x-icon" href="./img/web/icons8-chave-inglesa-color-glass-16.png">
  <link rel="stylesheet" href="./css/style.css">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <!-- JQUERY -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" crossorigin="anonymous"></script>

  <!-- JS -->
  <script src="./js/index.js"></script>

</head>
<body class="container">
  <div class="container-principal">
    <div class="card-1">
      <span class="card-1-title">Car Trading</span>
    </div>
    <div class="card-2">
      <form action="" method="POST">
        <h2>Bem vindo ao Car Trading</h2>
        <p>
          Informe seus dados para se cadastrar ou faça login.
        </p>
        <ul>
          <li>
            <label for="name">Nome
              <input type="text" id="name" name="name">
            </label>
          </li>
          <li>
            <label for="lastname">Sobrenome
              <input type="text" id="lastname" name="lastname">
            </label>
          </li>
          <li>
            <label for="email">E-mail
              <input type="email" id="email" name="email">
            </label>
          </li>
          <li>
            <label for="state" id="state">Estado</label>
          </li>
          <li>
            <label for="city" id="city">Cidade</label>
          </li>
          <li>
            <label for="password">Senha
              <input type="password" id="password" name="password">
            </label>
          </li>
          <li>
            <label for="confirmpassword">Confirme a senha
              <input type="password" id="confirmpassword" name="confirmpassword">
            </label>
          </li>
          <li>
            <label for="submit">
              <input type="submit" id="submit" name="submit" value="Enviar">
            </label>
          </li>
          <li class="login">
            <span>
              Já possui conta? <a href="#">Faça login!</a>
            </span>
          </li>
        </ul>
      </form>
    </div>
  </div>
</body>
</html>