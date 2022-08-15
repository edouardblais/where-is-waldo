import beachimage from '../images/beach.jpg';
import timer from './timer';

const playBeach = () => {
  const time = timer();
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
    time.starttimer();
  });

  const tagmodal = document.createElement('div');
  tagmodal.classList.add('tagmodal');
  beach.addEventListener('click', (e) => {
    const xcoord = e.clientX - 20;
    const ycoord = e.clientY - 20;
    tagmodal.style.left = `${xcoord}px`;
    tagmodal.style.top = `${ycoord}px`;
    tagmodal.classList.add('showmodal');
  });

  const backtohomebutton = document.getElementById('backtohomebutton');
  backtohomebutton.addEventListener('click', () => {
    time.stoptimer();
  });

  playcontainer.appendChild(beach);
  playcontainer.appendChild(startmodal);
  playcontainer.appendChild(tagmodal);

  content.appendChild(playcontainer);
};

export default playBeach;
