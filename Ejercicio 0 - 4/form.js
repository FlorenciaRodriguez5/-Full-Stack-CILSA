

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("estilo1").addEventListener("click", function() {
      document.getElementById("estilo").setAttribute("href", "form.css" );
    });
  
    document.getElementById("contraste").addEventListener("click", function() {
      document.getElementById("estilo").setAttribute("href", "contraste.css");
    });
});

  

function validacion (){
 var email = document.getElementById("email").value;

 if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
   return false;
  }
 
}



