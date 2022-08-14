import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';
import timer from './timer';

const homeHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('headercontainer');

  const imagescontainer = document.createElement('div');

  const waldo = document.createElement('img');
  waldo.src = waldoimage;
  imagescontainer.appendChild(waldo);

  const odlaw = document.createElement('img');
  odlaw.src = odlawimage;
  imagescontainer.appendChild(odlaw);

  const whitebeard = document.createElement('img');
  whitebeard.src = whitebeardimage;
  imagescontainer.appendChild(whitebeard);

  const timercontainer = document.createElement('div');
  timercontainer.innerHTML = timer();

  const backtohome = document.createElement('button');
  backtohome.innerText = 'Back To Home';
  backtohome.id = 'backtohomebutton';

  headercontainer.appendChild(imagescontainer);
  headercontainer.appendChild(timercontainer);
  headercontainer.appendChild(backtohome);

  content.appendChild(headercontainer);
};

export default homeHeader;
