
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultDiv = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);

      if (isNaN(weight) || isNaN(height)) {
          resultDiv.innerText = "Por favor, ingrese valores válidos.";
      } else {
          const bmi = calculateBMI(weight, height);
          const interpretation = getInterpretation(bmi);
          resultDiv.innerText = `Su IMC es ${bmi.toFixed(2)} - ${interpretation}`;
      }
  });

  function calculateBMI(weight, height) {
      return weight / (height * height);
  }

  function getInterpretation(bmi) {
      if (bmi < 18.5) {
          return "Bajo peso";
      } else if (bmi < 24.9) {
          return "Peso normal";
      } else if (bmi < 29.9) {
          return "Sobrepeso";
      } else {
          return "Obesidad";
      }
  }
});


 