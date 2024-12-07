import statistics from '../statistics.js';

const outputElement = document.getElementById('problemDiv');

let noteOffset;
let startTime;

const displayTheThings = (clef, noteOffset) => {
  return `${clef} ${noteOffset}`;
};

const calculateNote = (noteOffset) => {
  return noteOffset % 12;
};

const update = (problem) => {
  const clef = problem.clef;
  const newNumber = problem.noteOffset;
  if(typeof clef !== 'string') throw new Error('Expected string');
  if(typeof newNumber !== 'number') throw new Error('Expected number');

  noteOffset = newNumber;

  outputElement.textContent = `${displayTheThings(clef, noteOffset)}`;
  startTime = performance.now();
}

const highlight = isRight => {
  outputElement.classList.remove('right-answer', 'wrong-answer', 'fade-out');
  outputElement.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => outputElement.classList.add('fade-out'), 1);
}

const checkAnswer = (answer) => {
  if(typeof answer !== 'number') throw new Error('Expected number');
  
  const isRight = answer === calculateNote(noteOffset);

  highlight(isRight);

  if(isRight) {
    const problemDuration = performance.now() - startTime;
    // statistics.addTime(letter, number2, problemDuration);

    return true;
  }
  return false;
}

export default { update, checkAnswer };