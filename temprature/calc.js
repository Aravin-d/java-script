const textBox = document.getElementById("textBox");
const farenheit = document.getElementById("toFarenheit");
const celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (farenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "°F";
  } else if (celsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(2) + "°C";
  } else {
    result.textContent = "Select a unit";
  }
}
