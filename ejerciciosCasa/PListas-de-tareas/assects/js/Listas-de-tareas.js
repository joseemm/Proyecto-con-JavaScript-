

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const clearTaskButton = document.getElementById("clearTaskButton");

// Crear una variable para almacenar las tareas en el localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Crear una función para agregar una nueva tarea a la lista
function addTask(e) {
  // Evitar que el formulario se envíe y recargue la página
  e.preventDefault();
  // Obtener el valor del input
  const task = taskInput.value;
  // Validar que el input no esté vacío
  if (task === "") {
    alert("Por favor, escribe una tarea");
  } else {
    // Crear un objeto con la información de la tarea
    const taskObject = {
      id: Date.now(),
      name: task,
      completed: false
    };
    // Agregar la tarea al arreglo de tareas
    tasks.push(taskObject);
    // Guardar las tareas en el localStorage
    saveTasks();
    // Generar el HTML de la tarea
    generateTaskHTML(taskObject);
    // Limpiar el input
    taskInput.value = "";
  }
}

// Crear una función para guardar las tareas en el localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Crear una función para generar el HTML de una tarea
function generateTaskHTML(task) {
  // Crear un elemento li
  const li = document.createElement("li");
  // Asignarle un id y una clase según el estado de la tarea
  li.setAttribute("data-id", task.id);
  li.className = task.completed ? "done" : "";
  // Agregar el HTML interno del li
  li.innerHTML = `
    <input type="checkbox" ${task.completed ? "checked" : ""}>
    <span>${task.name}</span>
    <button>&times;</button>
  `;
  // Agregar el li a la lista
  taskList.appendChild(li);
}

// Crear una función para generar el HTML de todas las tareas
function generateTasksHTML() {
  // Limpiar la lista
  taskList.innerHTML = "";
  // Recorrer el arreglo de tareas
  for (let task of tasks) {
    // Generar el HTML de cada tarea
    generateTaskHTML(task);
  }
}

// Crear una función para marcar una tarea como completada
function toggleTask(e) {
  // Obtener el elemento sobre el que se hizo clic
  const element = e.target;
  // Verificar si el elemento es un checkbox
  if (element.type === "checkbox") {
    // Obtener el id de la tarea
    const id = element.parentElement.getAttribute("data-id");
    // Buscar la tarea en el arreglo de tareas
    const task = tasks.find(task => task.id == id);
    // Cambiar el estado de la tarea
    task.completed = !task.completed;
    // Guardar las tareas en el localStorage
    saveTasks();
    // Cambiar la clase del li según el estado de la tarea
    element.parentElement.className = task.completed ? "done" : "";
  }
}

// Crear una función para eliminar una tarea
function deleteTask(e) {
  // Obtener el elemento sobre el que se hizo clic
  const element = e.target;
  // Verificar si el elemento es un botón
  if (element.tagName === "BUTTON") {
    // Obtener el id de la tarea
    const id = element.parentElement.getAttribute("data-id");
    // Filtrar el arreglo de tareas para eliminar la tarea
    const newTasks = tasks.filter(task => task.id != id);
    // Actualizar el arreglo de tareas
    tasks.length = 0;
    tasks.push(...newTasks);
    // Guardar las tareas en el localStorage
    saveTasks();
    // Eliminar el li de la lista
    taskList.removeChild(element.parentElement);
  }
}

// Crear una función para borrar las tareas completadas
function clearTasks() {
  // Filtrar el arreglo de tareas para eliminar las tareas completadas
  const newTasks = tasks.filter(task => !task.completed);
  // Actualizar el arreglo de tareas
  tasks.length = 0;
  tasks.push(...newTasks);
  // Guardar las tareas en el localStorage
  saveTasks();
  // Generar el HTML de las tareas
  generateTasksHTML();
}

// Agregar un evento al botón de agregar tarea
addTaskButton.addEventListener("click", addTask);

// Agregar un evento a la lista para marcar o eliminar tareas
taskList.addEventListener("click", e => {
  toggleTask(e);
  deleteTask(e);
});

// Agregar un evento al botón de borrar tareas completadas
clearTaskButton.addEventListener("click", clearTasks);

// Generar el HTML de las tareas al cargar la página
generateTasksHTML();
 