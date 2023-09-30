import Problem from './components/Problem.js';
import Answer from './components/Answer.js';
import statistics from './statistics.js';

const [number1, number2] = statistics.getProblem();
Problem.generate(number1, number2);

const setAnswerAndCheck = number => {
  Answer.set(number);

  const [number1, number2] = statistics.getProblem();
  Problem.checkAnswer(() => Problem.generate(number1, number2));
}

document.getElementById('zero').addEventListener('click', () => setAnswerAndCheck(0));
document.getElementById('one').addEventListener('click', () => setAnswerAndCheck(1));
document.getElementById('two').addEventListener('click', () => setAnswerAndCheck(2));
document.getElementById('three').addEventListener('click', () => setAnswerAndCheck(3));
document.getElementById('four').addEventListener('click', () => setAnswerAndCheck(4));
document.getElementById('five').addEventListener('click', () => setAnswerAndCheck(5));
document.getElementById('six').addEventListener('click', () => setAnswerAndCheck(6));
document.getElementById('seven').addEventListener('click', () => setAnswerAndCheck(7));
document.getElementById('eight').addEventListener('click', () => setAnswerAndCheck(8));
document.getElementById('nine').addEventListener('click', () => setAnswerAndCheck(9));
document.getElementById('ten').addEventListener('click', () => setAnswerAndCheck(10));
document.getElementById('eleven').addEventListener('click', () => setAnswerAndCheck(11));
