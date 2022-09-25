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
  <link rel="icon" type="image/x-icon" href="./img/favicon.ico">
  <link rel="stylesheet" href="./css/index.css">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
</head>
<body class="container">
  <div class="container-principal">
    <div class="card-1">
      <span class="card-1-title">Car Trading</span>
      <span class="card-1-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, facilis architecto adipisci animi esse itaque totam reprehenderit error eveniet accusantium.
      </span>
    </div>
    <div class="card-2">
      <form action="" method="POST">
        <h2>Bem vindo ao Car Trading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi, nesciunt.
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
            <label for="email">Email
              <input type="email" id="email" name="email">
            </label>
          </li>
          <li>
            <label for="country">Cidade
              <input type="text" id="country" name="country">
            </label>
          </li>
          <li>
            <label for="password">Senha
              <input type="password" id="password" name="password">
            </label>
          </li>
          <li>
            <label for="confirmpassword">Confirme a senha
              <input type="confirmpassword" id="confirmpassword" name="confirmpassword">
            </label>
          </li>
          <li>
            <label for="submit">
              <input type="submit" id="submit" name="submit" value="Enviar">
            </label>
          </li>
        </ul>
      </form>
    </div>
  </div>
</body>
</html>