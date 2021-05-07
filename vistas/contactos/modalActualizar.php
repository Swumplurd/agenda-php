<div class="modal fade" id="modalActualizarContacto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Actualizar contacto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="frmAgregarContactoU">
            <div id="categoriasIdU"></div>
            <input type="text" id = "idContactoU" name="idContactoU" hidden="">
            <label for="nombreU">Nombre</label>
            <input type="text" class="form-control" id="nombreU" name="nombreU">

            <label for="apaternoU">Apellido Paterno</label>
            <input type="text" class="form-control" id="apaternoU" name="apaternoU">

            <label for="amaternoU">Apellido Materno</label>
            <input type="text" class="form-control" id="amaternoU" name="amaternoU">

            <label for="telefonoU">Telefono</label>
            <input type="text" class="form-control" id="telefonoU" name="telefonoU">

            <label for="emailU">Email</label>
            <input type="text" class="form-control" id="emailU" name="emailU">
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success" id="btnActualizarContacto">Actualizar</button>
      </div>
    </div>
  </div>
</div>