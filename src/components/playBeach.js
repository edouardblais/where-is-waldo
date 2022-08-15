import beachimage from '../images/beach.jpg';
import timer from './timer';

const playBeach = () => {
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const beach = document.createElement('img');
  beach.classList.add('playimage');
  beach.classList.add('blurimage');
  beach.src = beachimage;

  const startmodal = document.createElement('div');
  startmodal.classList.add('startmodal');
  startmodal.classList.add('showmodal');
  startmodal.innerText = 'Start!';
  startmodal.addEventListener('click', () => {
    startmodal.classList.remove('showmodal');
    beach.classList.remove('blurimage');
    const time = timer();
    time.starttimer();
  });

  playcontainer.appendChild(beach);
  playcontainer.appendChild(startmodal);

  content.appendChild(playcontainer);
};

export default playBeach;
