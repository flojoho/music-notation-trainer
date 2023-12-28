
const statistics = JSON.parse(localStorage.getItem('mental-math-statistics') || '[]');

const save = () => {
  localStorage.setItem('mental-math-statistics', JSON.stringify(statistics));
}

const getMedian = array => {
  const medianIndex = Math.ceil(array.length / 2) - 1;
  return array[medianIndex];
}

const addTime = (number1, number2, time) => {
  if(isNaN(number1) || isNaN(number2) || isNaN(time)) throw new Error('All arguments must be numbers');
  
  let foundProblem = statistics.find(problem => problem.number1 === number1 && problem.number2 === number2);
  if(!foundProblem) {
    foundProblem = {
      number1,
      number2,
      times: []
    };
    statistics.push(foundProblem);
  }

  foundProblem.times.push(time);
  foundProblem.times.sort((a, b) => a - b);
  foundProblem.times = foundProblem.times.slice(0, 10);

  save();

  console.log(statistics.map(problem => {
    return {
      number1: problem.number1,
      number2: problem.number2,
      times: problem.times,
      median: getMedian(problem.times)
    }
  }).sort((a, b) => b.median - a.median));
}

const getProblem = () => {
  const allProblems = [];
  
  for(let number1 = 0; number1 <= 11; number1++) {
    for(let number2 = 0; number2 <= 11; number2++) {
      const foundProblem = statistics.find(problem => problem.number1 === number1 && problem.number2 === number2);

      allProblems.push({
        number1: number1,
        number2: number2,
        median: getMedian(foundProblem?.times || [10000])
      });
    }
  }

  const timeSum = allProblems.reduce((acc, cur) => acc + cur.median, 0);
  const cutOff = Math.random() * timeSum;

  let currentSum = 0;
  let chosenProblem;
  for(const problem of allProblems) {
    currentSum += problem.median;
    if(currentSum >= cutOff) {
      chosenProblem = problem;
      break;
    }
  }
  
  return [chosenProblem.number1, chosenProblem.number2];
}

export default { save, addTime, getProblem };

