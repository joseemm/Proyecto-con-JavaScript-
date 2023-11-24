
 var celsius = document.getElementById("celsius");
 var fahrenheit = document.getElementById("fahrenheit");

 // Definimos las funciones de conversión
 function celsiusToFahrenheit(c) {
     return c * 9 / 5 + 32;
 }

 function fahrenheitToCelsius(f) {
     return (f - 32) * 5 / 9;
 }


 celsius.addEventListener("input", function() {
    
     var c = parseFloat(celsius.value);
    
     if (isNaN(c)) {
        
         fahrenheit.value = "";
     } else {
         
         var f = celsiusToFahrenheit(c);
         fahrenheit.value = f;
     }
 });

 fahrenheit.addEventListener("input", function() {
     
     var f = parseFloat(fahrenheit.value);
     
     if (isNaN(f)) {
        
         celsius.value = "";
     } else {
         
         var c = fahrenheitToCelsius(f);
         celsius.value = c;
     }
 });



 