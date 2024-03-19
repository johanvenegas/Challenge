let formato = /^[a-z\s]+$/;
let encriptadas = ["ai", "enter", "imes", "ober", "ufat"];
let desencriptadas = ["a", "e", "i", "o", "u"];

function alertaDeError(){
  var textoUsuario = document.getElementById("section-Codificar").value;
  var textoUsuario2 = document.getElementById("section-Decodificar").value;

  if(!formato.test(textoUsuario)){

    let alerta = document.getElementById("alerta");
    alerta.style.color = "red";
    alerta.style.animation
    setTimeout(function() {
        alerta.style.display = "none";
    }, 2000);
  }
  if(!formato.test(textoUsuario2)){

    let alerta = document.getElementById("alerta");
    alerta.style.color = "red";
    alerta.style.display = "flex";
    setTimeout(function() {
        alerta.style.display = "none";
      }, 2000);
  }
}

function copiarTexto(){
  // Obtener el elemento textarea por su id
  var textarea = document.getElementById("section-Decodificar");

  // Seleccionar el texto dentro del textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Deseleccionar el texto después de copiar
  window.getSelection().removeAllRanges();

  // Alerta o mensaje opcional para informar al usuario que el texto ha sido copiado
    alert("Texto copiado al portapapeles: " + textarea.value);
    
}


function codificar() {

  var textoUsuario = document.getElementById("section-Codificar").value;

  if (formato.test(textoUsuario)){
/*split("") es utiliza para dividir una cadena */
    let verificarTexto = textoUsuario.split("");/*el texto se separa para verificarse luego */

    for (let a = 0; a < verificarTexto.length; a++) { /* length funciona para obtener el numero o cantidad de elementos que hay en una cadena */
      for (let b = 0; b < desencriptadas.length; b++) {
        if (verificarTexto[a] === desencriptadas[b]) { /*aqui verifica si el texto tiene las vocales desencriptadas , y si las tiene las encripta */
          verificarTexto[a] = encriptadas[b];
          
        }
      }
    }
    /*join("") es utiliza para juntar la cadena de nuevo */
    document.getElementById("section-Decodificar").value= verificarTexto.join("");
  }
}


function decodificar(){
  let textoUsuario = document.getElementById("section-Codificar").value;
// Reemplazar 'ai' por 'a', 'enter' por 'e', 'imes' por 'i', 'ober' por 'o', 'ufat' por 'u'
    if (formato.test(textoUsuario)){
        let cadenaTransformada = textoUsuario .replace(/ai/g, 'a')
                                .replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        document.getElementById("section-Decodificar").value = cadenaTransformada;
    }
}