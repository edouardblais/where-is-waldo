import spaceimage from '../images/space.jpg';
import timer from './timer';

const playSpace = () => {
  const time = timer();
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const space = document.createElement('img');
  space.classList.add('playimage');
  space.classList.add('blurimage');
  space.src = spaceimage;

  const startmodal = document.createElement('div');
  startmodal.classList.add('startmodal');
  startmodal.classList.add('showmodal');
  startmodal.innerText = 'Start!';
  startmodal.addEventListener('click', () => {
    startmodal.classList.remove('showmodal');
    space.classList.remove('blurimage');
    time.starttimer();
  });

  const backtohomebutton = document.getElementById('backtohomebutton');
  backtohomebutton.addEventListener('click', () => {
    time.stoptimer();
  });

  playcontainer.appendChild(space);
  playcontainer.appendChild(startmodal);

  content.appendChild(playcontainer);
};

export default playSpace;
