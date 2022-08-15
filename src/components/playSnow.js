import snowimage from '../images/snow.jpg';
import timer from './timer';

const playSnow = () => {
  const time = timer();
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const snow = document.createElement('img');
  snow.classList.add('playimage');
  snow.classList.add('blurimage');
  snow.src = snowimage;

  const startmodal = document.createElement('div');
  startmodal.classList.add('startmodal');
  startmodal.classList.add('showmodal');
  startmodal.innerText = 'Start!';
  startmodal.addEventListener('click', () => {
    startmodal.classList.remove('showmodal');
    snow.classList.remove('blurimage');
    time.starttimer();
  });

  const tagmodal = document.createElement('div');
  tagmodal.classList.add('tagmodal');
  snow.addEventListener('click', (e) => {
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

  playcontainer.appendChild(snow);
  playcontainer.appendChild(startmodal);
  playcontainer.appendChild(tagmodal);

  content.appendChild(playcontainer);
};

export default playSnow;
