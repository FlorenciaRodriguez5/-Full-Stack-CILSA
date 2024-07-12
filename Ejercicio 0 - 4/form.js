

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("estilo1").addEventListener("click", function() {
      document.getElementById("estilo").setAttribute("href", "./CSS/form.css" );
    });
  
    document.getElementById("contraste").addEventListener("click", function() {
      document.getElementById("estilo").setAttribute("href", "./CSS/contraste.css");
    });
});



function validacion (){
 var email = document.getElementById("email").value;

 if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
   alert['ERROR El valor ingresado debe cumplir la estructura gramatical de un correo electronico']
   return false; 
  }
  else valor = document.getElementById("Nombre").value; 
   if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
   return false;
  }
  else valor = document.getElementById("campo").value;
   if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
   return false;
  }
 
}




