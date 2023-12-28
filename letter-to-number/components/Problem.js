import statistics from '../statistics.js';
import Answer from './Answer.js';

const letterToNumberMap = new Map();
letterToNumberMap.set('A', 0);
letterToNumberMap.set('A#', 1);
letterToNumberMap.set('Bb', 1);
letterToNumberMap.set('B', 2);
letterToNumberMap.set('C', 3);
letterToNumberMap.set('C#', 4);
letterToNumberMap.set('Db', 4);
letterToNumberMap.set('D', 5);
letterToNumberMap.set('D#', 6);
letterToNumberMap.set('Eb', 6);
letterToNumberMap.set('E', 7);
letterToNumberMap.set('F', 8);
letterToNumberMap.set('F#', 9);
letterToNumberMap.set('Gb', 9);
letterToNumberMap.set('G', 10);
letterToNumberMap.set('G#', 11);
letterToNumberMap.set('Ab', 11);

const outputElement = document.getElementById('problemDiv');

let letter;
let startTime;
let callback = () => {};

const numberToDuodecimal = number => {
  if(0 <= number && number <= 9) return `${number}`;
  if(number === 10) return 'a';
  if(number === 11) return 'b';
}

const letterToNumber = letter => {
  if(typeof letter !== 'string') throw new Error('Expected string');

  const result = letterToNumberMap.get(letter);

  if(typeof result === 'undefined') throw new Error('Letter not found');

  return result;
}

const generate = (newLetter) => {
  if(typeof newLetter !== 'string') throw new Error('Expected string');

  letter = newLetter;
  callback = callback;

  outputElement.textContent = `${letter}`;
  startTime = performance.now();
}

const checkAnswer = callback => {
  if(typeof callback !== 'function') throw new Error('Expected callback function');
  
  const answer = Answer.get();
  const isRight = answer === letterToNumber(letter);

  Answer.set(0);
  Answer.highlight(isRight);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    // statistics.addTime(letter, number2, problemDuration);

    callback();
  }
}

export default { generate, checkAnswer, letterToNumberMap };