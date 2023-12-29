import statistics from '../statistics.js';
import Answer from './Answer.js';

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

const checkAnswer = callback => {
  if(typeof callback !== 'function') throw new Error('Expected callback function');
  
  const answer = Answer.get();
  const isRight = answer === (number1 + number2) % 12;

  Answer.set(0);
  Answer.highlight(isRight);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    statistics.addTime(number1, number2, problemDuration);

    callback();
    return true;
  }
  return false;
}

export default { generate, checkAnswer };