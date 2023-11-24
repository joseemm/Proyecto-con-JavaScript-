

// Aquí va el código javascript para programar la lógica de tu juego
    // Variables globales
    var questions = [
        {
          question: "¿Cuál es la capital de España?",
          options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
          answer: 0
        },
        {
          question: "¿Qué deporte practica Rafael Nadal?",
          options: ["Fútbol", "Tenis", "Baloncesto", "Golf"],
          answer: 1
        },
        {
          question: "¿Qué animal es el símbolo de la paz?",
          options: ["Paloma", "Cisne", "Águila", "Colibrí"],
          answer: 0
        },
        {
          question: "¿Qué instrumento musical tiene forma de 8?",
          options: ["Guitarra", "Violín", "Saxofón", "Arpa"],
          answer: 1
        },
        {
          question: "¿Qué planeta es el más grande del sistema solar?",
          options: ["Tierra", "Marte", "Júpiter", "Saturno"],
          answer: 2
        }
      ];
      var score = 0;
      var currentQuestion = 0;
      var time = 60;
      var timer;
  
      // Elementos del DOM
      var container = document.getElementById("container");
      var start = document.getElementById("start");
      var game = document.getElementById("game");
      var question = document.getElementById("question");
      var options = document.getElementById("options");
      var score = document.getElementById("score");
      var timer = document.getElementById("timer");
      var result = document.getElementById("result");
  
      // Función para iniciar el juego
      function startGame() {
        start.style.display = "none";
        game.style.display = "block";
        showQuestion();
        startTimer();
      }
  
      // Función para mostrar una pregunta y sus opciones
      function showQuestion() {
        var q = questions[currentQuestion];
        question.textContent = q.question;
        options.innerHTML = "";
        for (var i = 0; i < q.options.length; i++) {
          var li = document.createElement("li");
          var radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "option";
          radio.value = i;
          li.appendChild(radio);
          li.appendChild(document.createTextNode(q.options[i]));
          options.appendChild(li);
        }
      }
  
      // Función para comprobar la respuesta del usuario
      function checkAnswer() {
        var radios = document.getElementsByName("option");
        for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            var userAnswer = parseInt(radios[i].value);
            break;
          }
        }
        if (userAnswer == questions[currentQuestion].answer) {
          score.textContent = "Puntuación: " + (parseInt(score.textContent.split(": ")[1]) + 10);
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion();
        } else {
          endGame();
        }
      }
  
      // Función para iniciar el temporizador
      function startTimer() {
        timer.textContent = "Tiempo: 60";
        time = 60;
        timerId = setInterval(function () {
          time--;
          timer.textContent = "Tiempo: " + time;
          if (time == 0) {
            endGame();
          }
        }, 1000);
      }
  
      // Función para terminar el juego
      function endGame() {
        clearInterval(timerId);
        result.textContent = "Tu puntuación final es: " + score.textContent.split(": ")[1];
        result.style.display = "block";
      }
  
      // Eventos
      start.addEventListener("click", startGame);
      options.addEventListener("click", checkAnswer);

 