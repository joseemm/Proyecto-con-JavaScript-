      // Obtenemos los elementos del documento
      var numero = document.getElementById("numero");
      var calcular = document.getElementById("calcular");
      var tabla = document.getElementById("tabla");
  
      // Añadimos un evento al botón para que ejecute una función al hacer clic
      calcular.addEventListener("click", function() {
        // Limpiamos el contenido de la tabla
        tabla.innerHTML = "";
        // Obtenemos el valor del número introducido
        var n = numero.value;
        // Recorremos los números del 1 al 12
        for (var i = 1; i <= 12; i++) {
          // Creamos una fila de la tabla
          var fila = document.createElement("tr");
          // Creamos dos celdas para la fila
          var celda1 = document.createElement("td");
          var celda2 = document.createElement("td");
          // Escribimos el contenido de las celdas
          celda1.textContent = n + " x " + i;
          celda2.textContent = n * i;
          // Añadimos las celdas a la fila
          fila.appendChild(celda1);
          fila.appendChild(celda2);
          // Añadimos la fila a la tabla
          tabla.appendChild(fila);
        }
      }); // Aquí faltaba el punto y coma