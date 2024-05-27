const inputElement = document.getElementById("arr");
const listOfNumbers = document.getElementById("list-of-numbers");
const submitButton = document.getElementById("submit-btn");
const clearButton = document.getElementById("clear")

let arrayOfNumbers = [];

function isEmpty () {
  let inputValue = inputElement.value.trim();
  if (inputValue === "") {
    alert("Поле ввода не должно быть пустым");
    return;
  }
}

// SUBMIT BUTTON
submitButton.addEventListener("click", () => {
  let inputValue = inputElement.value.trim();

  if (inputValue === "") {
    console.log("Input error: empty input value. Function was inerrupted.");
    alert("Поле ввода не должно быть пустым");
    return;
  }

  if (isNaN(inputElement.value)) {
    console.log("Input error: value is not a number. Function was inerrupted.");
    alert("Введите число");
    inputElement.value = "";
    return;
  }

  let getValue = parseInt(inputValue);
  arrayOfNumbers.push(getValue);
  let result = arrayOfNumbers.join(" ");
  listOfNumbers.innerText = result;
  inputElement.value = "";
  console.log("Your array: ", arrayOfNumbers)
})

// CLEAR ARRAY
clearButton.addEventListener("click", () => {
  if (arrayOfNumbers.length === 0) {
    console.log("Input error: empty array. Function was inerrupted.");
    alert("Список не должен быть пустым");
    return;
  }

  arrayOfNumbers = [];
  listOfNumbers.innerText = "";
  result.innerText = "";
  console.log("The array is cleared: ", arrayOfNumbers)
})

const sumButton = document.getElementById("sum");
const averageBtn = document.getElementById("average");
const result = document.getElementById("result-of-action");

// SUMMARIZE ARRAY
sumButton.addEventListener("click", () => {
  let sum = 0;
  for (const number of arrayOfNumbers) {
    sum += number;
    
  }
  console.log("Sum result: ", sum)
  result.innerText = `Результат суммирования: ${sum}`
})

// ARRAY AVERAGE 
averageBtn.addEventListener("click", () => {
  let average = 0;
  let sum = 0;
  for (const number of arrayOfNumbers) {
    sum += number;
    average = sum / arrayOfNumbers.length;
  }
  console.log(`Average: `, average)
  result.innerText = `Среднее значение: ${average}`
})