import spaceimage from '../images/space.jpg';
import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';
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
  startmodal.innerText = 'Start!';

  const tagmodal = document.createElement('div');
  tagmodal.classList.add('tagmodal');

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const waldo = document.createElement('img');
  waldo.classList.add('dropdownimages');
  waldo.src = waldoimage;
  dropdown.appendChild(waldo);

  const odlaw = document.createElement('img');
  odlaw.classList.add('dropdownimages');
  odlaw.src = odlawimage;
  dropdown.appendChild(odlaw);

  const whitebeard = document.createElement('img');
  whitebeard.classList.add('dropdownimages');
  whitebeard.src = whitebeardimage;
  dropdown.appendChild(whitebeard);

  startmodal.addEventListener('click', () => {
    startmodal.style.visibility = 'hidden';
    space.classList.remove('blurimage');
    time.starttimer();
    space.addEventListener('click', (e) => {
      const xcoord = e.clientX;
      const ycoord = e.clientY;
      tagmodal.style.left = `${xcoord - 20}px`;
      tagmodal.style.top = `${ycoord - 20}px`;
      tagmodal.style.visibility = 'visible';
      dropdown.style.left = `${xcoord + 25}px`;
      dropdown.style.top = `${ycoord - 20}px`;
      dropdown.style.visibility = 'visible';
    });
  });

  const backtohomebutton = document.getElementById('backtohomebutton');
  backtohomebutton.addEventListener('click', () => {
    time.stoptimer();
  });

  playcontainer.appendChild(space);
  playcontainer.appendChild(startmodal);
  playcontainer.appendChild(tagmodal);
  playcontainer.appendChild(dropdown);

  content.appendChild(playcontainer);
};

export default playSpace;
