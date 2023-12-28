
const outputElement = document.getElementById('answerDiv');

let answer = 0;

const get = () => {
  return parseInt(answer);
}

const set = newAnswer => {
  if(typeof newAnswer !== 'number') throw new Error('Expected number');
  answer = String(newAnswer);
  outputElement.textContent = `= ${ newAnswer }`;
}

const highlight = isRight => {
  outputElement.classList.remove('right-answer', 'wrong-answer', 'fade-out');
  outputElement.classList.add(isRight ? 'right-answer' : 'wrong-answer');
  setTimeout(() => outputElement.classList.add('fade-out'), 1);
}

export default { get, set, highlight };