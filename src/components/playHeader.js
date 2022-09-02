import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';

const homeHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('playheadercontainer');

  const imagescontainer = document.createElement('div');
  imagescontainer.classList.add('headerimagescontainer');

  const waldo = document.createElement('img');
  waldo.id = 'waldoheader';
  waldo.src = waldoimage;
  waldo.classList.add('headerimages');
  imagescontainer.appendChild(waldo);

  const odlaw = document.createElement('img');
  odlaw.id = 'odlawheader';
  odlaw.src = odlawimage;
  odlaw.classList.add('headerimages');
  imagescontainer.appendChild(odlaw);

  const whitebeard = document.createElement('img');
  whitebeard.id = 'whitebeardheader';
  whitebeard.src = whitebeardimage;
  whitebeard.classList.add('headerimages');
  imagescontainer.appendChild(whitebeard);

  const timercontainer = document.createElement('div');
  timercontainer.id = 'timer';
  timercontainer.innerHTML = '00:00:00';

  const backtohome = document.createElement('button');
  backtohome.innerText = 'Back To Home';
  backtohome.id = 'backtohomebutton';
  backtohome.classList.add('button');

  headercontainer.appendChild(imagescontainer);
  headercontainer.appendChild(timercontainer);
  headercontainer.appendChild(backtohome);

  content.appendChild(headercontainer);
};

export default homeHeader;
