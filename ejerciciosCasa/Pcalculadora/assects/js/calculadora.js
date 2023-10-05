// Crear una variable para almacenar la pantalla de la calculadora
var pantalla = document.getElementById("pantalla");


var operacion = "";


var numero1 = "";


var numero2 = "";


function agregarNumero(numero) {
  
  if (operacion == "") {
    numero1 += numero;
    pantalla.value = numero1;
  }
  
  else {
    numero2 += numero;
    pantalla.value = numero2;
  }
}


function agregarOperacion(oper) {
  
    if (numero1 != "") {
      // Convertir el primer número a una cadena
      numero1 = numero1.toString();
      operacion = oper;
      pantalla.value = operacion;
    }
  }
  


  function calcular() {
  
    if (numero1 != "" && numero2 != "" && operacion != "") {
   
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
     
      var resultado =0;
      
     
      switch (operacion) {
        case "+":
          resultado = numero1 + numero2;
          break;
        case "-":
          resultado = numero1 - numero2;
          break;
        case "*":
          resultado = numero1 * numero2;
          break;
        case "/":
          resultado = numero1 / numero2;
          break;
      }
      
      pantalla.value = resultado;
      
      // Asignar el resultado a numero1
      numero1 = resultado;
      
      operacion = "";
      numero2 = "";
    }
    
  }
// Crear una función para borrar la pantalla y las variables
function borrar() {
  pantalla.value = "";
  operacion = "";
  numero1 = "";
  numero2 = "";
}
