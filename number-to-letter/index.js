import Problem from './components/Problem.js';

const shuffleArray = array => {
  let currentIndex = array.length;
  let randomIndex;

  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const allProblems = [];

for(let number = 0; number <= 11; number++) {
  allProblems.push({
    number
  });

}
shuffleArray(allProblems);

const { number } = allProblems[0];
allProblems.shift();
Problem.generate(number);

const startTime = performance.now();

const setAnswerAndCheck = answer => {
  if(allProblems.length === 0) {
    const time = Math.round(performance.now() - startTime);
    // TODO: save score to highscore list in localstorage
    window.location.replace(`../highscores.html?score=${time}`);
    return;
  }
  
  const { number } = allProblems[0];
  const wasCorrect = Problem.checkAnswer(answer, () => Problem.generate(number));
  if(wasCorrect) {
    allProblems.shift();
  }
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
