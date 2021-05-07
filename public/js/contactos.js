$(document).ready(function(){

    $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');

    $('#btnAgregarContacto').click(function(){
        
      if ($('#idCategoriaSelect').val() == 0) {
			  swal({title:"Selecciona una categoria",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
		  }
      
      if ($('#nombre').val() == "") {
        swal({title:"Agrega el nombre",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#apaterno').val() == "") {
        swal({title:"Agrega el apellido Paterno",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#amaterno').val() == "") {
        swal({title:"Agrega el apellido Materno",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      if ($('#telefono').val() == "") {
        swal({title:"Agrega el telefono",
              icon: "warning",
              dangerMode: true,
        });
        return false;
      }
      if ($('#email').val() == "") {
         swal({title:"Agrega el email",
              icon: "warning",
              dangerMode: true,
        });
			  return false;
      }
      
      agregarContacto();
    });

    $('#btnActualizarContacto').click(function(){
      actualizarContacto();
    });


});

function actualizarContacto() {
  $.ajax({
    type: "POST",
    url: "procesos/contactos/actualizarContactos.php",
    data: $('#frmAgregarContactoU').serialize(),
    success: function (response) {
        response = response.trim();
        if (response == 1) {
          $('#cargaTablaContactos').load('vistas/contactos/tablaContactos.php');
          $('#modalActualizarContacto').modal("toggle");
            swal(":D", "Se actualizo con exito", "success");
        } else {
           alert(response);
           
          swal(":(", "No se actualizo", "error")
        }
      }
});
}

function agregarContacto() {
  $.ajax({
    type: "POST",
    url: "procesos/contactos/agregarContacto.php",
    data: $('#frmAgregarContacto').serialize(),
    success: function (response) {
      response = response.trim();
      if (response == 1) {
        $('#frmAgregarContacto')[0].reset();
        $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');
        swal ( ":D" , "Se agrego con exito" , "success" );
      } else {
        alert(response);
        swal(":(", "No se agrego", "error")
      }
    }
  });
}

function eliminarContacto(idAgenda) {
  swal({
    title: "¿Estas seguro de eliminar este contacto?",
    text: "Una vez eliminado no podra ser recuperado",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      $.ajax({
        type: "POST",
        data: "idAgenda=" + idAgenda,
        url: "procesos/contactos/eliminarContacto.php",
        success: function (response) {
          response = response.trim();
          if (response == 1) {
            $("#cargaTablaContactos").load('vistas/contactos/tablaContactos.php');
            swal(":D", "Se elimino con exito", "success");
          } else {
            alert(response);
            swal(":(", "No se elimino", "error")
          }
        }
      });
    }
  });
}

function obtenerDatosContacto(idAgenda) {
  $.ajax({
    type: "POST",
    data: "idAgenda=" + idAgenda,
    url: "procesos/contactos/obtenerDatosContacto.php",
    success:function(response) {
      response = jQuery.parseJSON(response);
      idCategoria = response['id_categoria'];

      $('#nombreU').val(response['nombre']);
      $('#apaternoU').val(response['paterno']);
      $('#amaternoU').val(response['materno']);
      $('#telefonoU').val(response['telefono']);
      $('#emailU').val(response['email']);
      $('#idContactoU').val(response['id_contacto']);
      $('#categoriasIdU').load("vistas/contactos/selectCategoriasUpdate.php?idCategoria=" + idCategoria);
    }
  });
}
