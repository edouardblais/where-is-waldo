import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';

const homeHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('playheadercontainer');

  const imagescontainer = document.createElement('div');
  imagescontainer.classList.add('headerimages');

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
  timercontainer.id = 'timer';
  timercontainer.innerHTML = '00:00:00';

  const backtohome = document.createElement('button');
  backtohome.innerText = 'Back To Home';
  backtohome.id = 'backtohomebutton';

  headercontainer.appendChild(imagescontainer);
  headercontainer.appendChild(timercontainer);
  headercontainer.appendChild(backtohome);

  content.appendChild(headercontainer);
};

export default homeHeader;
