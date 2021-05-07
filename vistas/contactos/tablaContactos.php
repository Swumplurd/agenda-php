<?php
  require_once "../../clases/Conexion.php";
  $c = new Conexion();
  $conexion = $c -> conectar();

  $sql = "SELECT  contactos.paterno AS paterno, contactos.materno AS materno, contactos.nombre AS nombre, contactos.telefono AS telefono, contactos.email AS email, categoria.nombre AS categoria, contactos.id_agenda AS  id_agenda
          FROM t_contactos AS contactos INNER JOIN t_categorias AS categoria ON contactos.id_categoria = categoria.id_categoria;";
  $result = mysqli_query($conexion, $sql);
?>

<div class="card">
  <div class="card-body">
    <div class="table table-responsive">
        <table class="table table-hover table-condensed table-bordered" id="contactos">
            <thead>
                <tr>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Categoria</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>

              <?php while($mostrar = mysqli_fetch_array($result)){
                $idAgenda = $mostrar['id_agenda'];
              ?>

                <tr>
                    <td><?php echo $mostrar['paterno']; ?></td>
                    <td><?php echo $mostrar['materno']; ?></td>
                    <td><?php echo $mostrar['nombre']; ?></td>
                    <td><?php echo $mostrar['telefono']; ?></td>
                    <td><?php echo $mostrar['email']; ?></td>
                    <td><?php echo $mostrar['categoria']; ?></td>
                    <td>
                        <span class="btn btn-warning" onclick="obtenerDatosContacto('<?php  echo $idAgenda ?>')" data-toggle="modal" data-target="#modalActualizarContacto">
                            <span class="far fa-edit"></span>
                        </span>
                    </td>
                    <td>
                        <span class="btn btn-danger" onclick="eliminarContacto('<?php  echo $idAgenda ?>')"  >
                            <span class="fas fa-trash-alt"></span>
                        </span>
                    </td>
                </tr>

              <?php
                }
              ?>
              
            </tbody>
        </table>
    </div>
  </div>
</div>

<script>
    $(document).ready(function(){
        $("#contactos").DataTable();
    });
</script>