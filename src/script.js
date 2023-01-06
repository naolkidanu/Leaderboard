import './style.css';

const scores = [
  {
    name: 'Naol',
    score: 50,
  },
  {
    name: 'Kidanu',
    score: 40,
  },
  {
    name: 'Merdasa',
    score: 60,
  },
];

const scoresEl = document.querySelector('.scores');
scores.forEach(({ name, score }) => {
  scoresEl.innerHTML += `<li class="score">${name} : ${score}</li>`;
});