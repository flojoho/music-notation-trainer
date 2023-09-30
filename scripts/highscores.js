
const scoreDiv = document.getElementById('scoreDiv');

const urlSearchParams = new URLSearchParams(window.location.search);
const { score } = Object.fromEntries(urlSearchParams.entries());

scoreDiv.textContent = score;