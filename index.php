<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Agenda PHP</title>
  <?php require_once "dependencias.php" ?>
</head>

<body>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="jumbotron text-center mb-0 bg-dark text-light">
          <h1 class="display-4">Agenada de Contactos (PHP & MYSQL)</h1>
          <p class="lead">Organiza tus contactos por Categorias!</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <?php
          require_once 'menu.php'
        ?>
      </div>
    </div>
  </div>

  <div class="container mt-3">
    <div class="row">

      <div class="col">
        <div class="card bg-dark text-white js-tilt" style="will-change: transform; transform: perspective(300px) rotateX(0deg) rotateY(0deg);">
          <img class="card-img" src="public/img/profile.jpg" alt="profile">
          <div class="card-img-overlay text-dark text-right align-items-center" style="transform: translateZ(20px)" >
            <h4 class="card-title">Swumplurd</h4>
            <p class="card-text">Mi agenda personal</p>
          </div>
        </div>    
      </div>

      <div class="col">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Agenda de Contactos</h4>
          <p class="card-text">PHP -MYSQL</p>
        </div>
      </div>
      </div>
      
    </div>

    <div class="row mt-3">
      <div class="col">
        <footer class="">
         
          <div class="jumbotron mb-0 py-3 bg-dark text-light rounded-0 rounded-top text-center">
            <p class="lead">Todos los Derechos Reservados <small class="display-6">(Joke)</small> &copy; 2021</p>
            <p class="lead">swumplurd</p>
          </div>
             
        </footer>
      </div>
    </div>
  </div>
</body>
</html>

<script>
$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5,
    reset: true
})
</script>