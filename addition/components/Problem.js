import statistics from '../statistics.js';

const outputElement = document.getElementById('problemDiv');

let number1;
let number2;
let startTime;
let callback = () => {};

const numberToDuodecimal = number => {
  if(0 <= number && number <= 9) return `${number}`;
  if(number === 10) return 'a';
  if(number === 11) return 'b';
}

const generate = (firstNumber, secondNumber) => {
  if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) throw new Error('Expected 2 integers');

  number1 = firstNumber;
  number2 = secondNumber;
  callback = callback;

  outputElement.textContent = `${numberToDuodecimal(number1)}+${numberToDuodecimal(number2)}`;
  startTime = performance.now();
}

const highlight = isRight => {
  outputElement.classList.remove('right-answer', 'wrong-answer', 'fade-out');
  outputElement.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => outputElement.classList.add('fade-out'), 1);
}

const checkAnswer = (answer, callback) => {
  if(typeof answer !== 'number') throw new Error('Expected number');
  if(typeof callback !== 'function') throw new Error('Expected callback function');
  
  const isRight = answer === (number1 + number2) % 12;

  highlight(isRight);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    statistics.addTime(number1, number2, problemDuration);

    callback();
    return true;
  }
  return false;
}

export default { generate, checkAnswer };