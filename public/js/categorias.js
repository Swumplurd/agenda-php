$(document).ready(function () {
  $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');

  $("#btnGuardarCategoria").click(function () {
    if ($('#nombreCategoria').val() == "") {
      swal({title:"Agregrega un nombre de categoria!", icon: "warning", dangerMode: true});
			  return false;
    } 
    agregarCategoria();
  });

  $("#btnActualizarCategoria").click(function () {
      actualizarCategoria();
  });
});

function agregarCategoria() {
  $.ajax({
    type: "POST",
    data: $('#frmAgregarCategoria').serialize(),
    url: "procesos/categorias/agregarCategorias.php",
    success: function (response) {
      response = response.trim();
      if (response == 1) {
        $('#frmAgregarCategoria')[0].reset();
        $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
        $('#modalActualizarCategoria').modal("toggle");
        swal (":D" , "Se agrego con exito" , "success" );
      } else {
        swal(":(", "No se agrego", "error")
      }
    }
  });
}


function eliminarCategoria(idCategoria) {
  swal({
    title: "¿Estas seguro de eliminar esta catgoria?",
    text: "Una vez eliminado no podra ser recuperado",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      $.ajax({
        type: "POST",
        data: "idCategoria=" + idCategoria,
        url: "procesos/categorias/eliminarCategoria.php",
        success: function (response) {
          response = response.trim();
          if (response == 1) {
            $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
            swal(":D", "Se Elimino con exito", "success");
          } else {
            swal(":(", "No se elimino", "error")
          }
        }
      });
    }
  });
}


function obtenerDatosCategoria(idCategoria){
  $.ajax({
    type: "POST",
    data: "idCategoria=" + idCategoria,
    url: "procesos/categorias/obtenerDatosCategoria.php",
    success:function(response) {
      response = jQuery.parseJSON(response);

      $('#idCategoria').val(response['idCategoria']);
      $('#nombreCategoriaU').val(response['nombre']);
      $('#descripcionU').val(response['descripcion']);
    }
  });
}


function actualizarCategoria() {
  $.ajax({
    type: "POST",
    data: $('#frmActualizarCategoria').serialize(),
    url: "procesos/categorias/actualizarCategoria.php",
    success: function (response) {
      response = response.trim();
      if (response == 1) {
        $("#cargaTablaCategorias").load('vistas/categorias/tablaCategorias.php');
        swal(":D", "Se actualizao con exito", "success");
      } else {
         alert(response);
        swal(":(", "No se actualizo", "error")
      }
    }
  });
}