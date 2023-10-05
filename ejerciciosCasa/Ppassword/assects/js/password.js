 // Obtener los elementos del DOM
 const form = document.getElementById("form");
 const passwordContainer = document.getElementById("password-container");
 const password = document.getElementById("password");
 const copy = document.getElementById("copy");

 // Crear el objeto tooltip de Bootstrap
 const tooltip = new bootstrap.Tooltip(copy);

 // Crear los objetos que contienen los caracteres posibles
 const lowercase = {
     characters: "abcdefghijklmnopqrstuvwxyz",
     checked: true
 };

 const uppercase = {
     characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
     checked: true
 };

 const numbers = {
     characters: "0123456789",
     checked: true
 };

 const symbols = {
     characters: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
     checked: false
 };

 // Crear un array con los objetos anteriores
 const options = [lowercase, uppercase, numbers, symbols];

 // Añadir un evento al formulario para generar la contraseña
 form.addEventListener("submit", (e) => {
     // Evitar el comportamiento por defecto del formulario
     e.preventDefault();
     // Obtener la longitud de la contraseña
     const length = parseInt(document.getElementById("length").value);
     // Obtener los valores de los checkboxes
     lowercase.checked = document.getElementById("lowercase").checked;
     uppercase.checked = document.getElementById("uppercase").checked;
     numbers.checked = document.getElementById("numbers").checked;
     symbols.checked = document.getElementById("symbols").checked;
     // Generar la contraseña
     const newPassword = generatePassword(length, options);
     // Mostrar la contraseña en el div correspondiente
     passwordContainer.classList.remove("d-none");
     password.textContent = newPassword;
 });

 // Añadir un evento al botón de copiar para copiar la contraseña al portapapeles
 copy.addEventListener("click", () => {
     // Crear un elemento input temporal
     const tempInput = document.createElement("input");
     // Asignarle el valor de la contraseña
     tempInput.value = password.textContent;
     // Añadirlo al body
     document.body.appendChild(tempInput);
     // Seleccionar su contenido
     tempInput.select();
     // Copiarlo al portapapeles
     document.execCommand("copy");
     // Eliminarlo del body
     document.body.removeChild(tempInput);
     // Cambiar el texto del tooltip
     copy.setAttribute("data-bs-original-title", "Copiado!");
     // Mostrar el tooltip
     tooltip.show();
     // Restaurar el texto original del tooltip después de un segundo
     setTimeout(() => {
         copy.setAttribute("data-bs-original-title", "Copiar al portapapeles");
     }, 1000);
 });

 // Función para generar una contraseña aleatoria
 function generatePassword(length, options) {
     // Crear una variable para almacenar la contraseña
     let password = "";
     // Crear una variable para almacenar los caracteres posibles
     let possibleCharacters = "";
     // Recorrer el array de opciones y concatenar los caracteres de las opciones seleccionadas
     for (let option of options) {
         if (option.checked) {
             possibleCharacters += option.characters;
         }
     }
     // Comprobar que haya al menos una opción seleccionada
     if (possibleCharacters === "") {
         alert("Debes seleccionar al menos una opción");
         return password;
     }
     
     

// Generar la contraseña tomando caracteres aleatorios del string de posibles caracteres
for (let i = 0; i < length; i++) {
// Obtener un índice aleatorio entre 0 y la longitud del string de posibles caracteres - 1
let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
// Obtener el caracter correspondiente a ese índice y añadirlo a la contraseña
let randomCharacter = possibleCharacters.charAt(randomIndex);
password += randomCharacter;
}
// Devolver la contraseña generada
return password;
}