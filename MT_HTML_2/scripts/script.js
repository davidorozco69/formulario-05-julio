let nombre, correo, mensaje;

let formulario = document.getElementById('form')

formulario.addEventListener('submit',(e)=>{
    console.log('hola');
    e.preventDefault();
    leerdatos()
})

function leerdatos(){
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje= document.querySelector('textarea').value;
    validarData (nombre,correo,mensaje)
    guardarlocarstorage(nombre,correo,mensaje)
}
function validarData (nombre,correo,mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        alert('Error')
        swal("Error de informacion", 
             "ups...",
             "Error");   
    }
}function guardarlocarstorage(nombre,correo,mensaje){
    localStorage.setItem('Nombre',nombre);
    localStorage.setItem('Correo',correo);
    localStorage.setItem('Mensaje',mensaje);
    listaData()
}
function listaData(){
    let nombreUs = localStorage.getItem('Nombre');
    let correoUs = localStorage.getItem('Correo');
    let mensajeUs = localStorage.getItem('Mensaje');
    swal(nombre);
}