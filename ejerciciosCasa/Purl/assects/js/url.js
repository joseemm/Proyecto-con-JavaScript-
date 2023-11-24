 // Función que se ejecuta al hacer clic en el botón
 function checkURL() {
  // Obtener el valor del campo de texto
  let url = document.getElementById("url").value;
  // Añadir el proxy CORS antes de la URL
  let proxy = "https://cors-anywhere.herokuapp.com/";
  url = proxy + url;
  // Hacer una petición HTTP con la API Fetch
  fetch(url)
      .then(response => {
          // Comprobar el estado de la respuesta
          if (response.status == 200) {
              // La página está arriba
              document.getElementById("message").innerHTML = "La página está arriba.";
          } else {
              // Hay algún problema con la página o el servidor
              document.getElementById("message").innerHTML = "La página no está arriba.";
          }
      })
      .catch(error => {
          // Hubo un error al hacer la petición
          document.getElementById("message").innerHTML = "Hubo un error al hacer la petición.";
      });
}