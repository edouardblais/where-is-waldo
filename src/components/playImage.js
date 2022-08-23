import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';
import timer from './timer';
import firebasePositions from './firebasePositions';

const playImage = (image) => {
  let positions = null;
  const foundCharacters = [];

  // import the position data from the firestore
  firebasePositions().then((response) => {
    positions = response;
  });

  const time = timer();
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const imageplayed = document.createElement('img');
  imageplayed.classList.add('playimage');
  imageplayed.classList.add('blurimage');
  imageplayed.src = image;

  const startmodal = document.createElement('div');
  startmodal.classList.add('startmodal');
  startmodal.innerText = 'Start!';

  const tagmodal = document.createElement('div');
  tagmodal.classList.add('tagmodal');

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  const waldo = document.createElement('img');
  waldo.classList.add('dropdownimages');
  waldo.id = 'dropdownwaldo';
  waldo.src = waldoimage;
  dropdown.appendChild(waldo);

  const odlaw = document.createElement('img');
  odlaw.classList.add('dropdownimages');
  odlaw.id = 'dropdownodlaw';
  odlaw.src = odlawimage;
  dropdown.appendChild(odlaw);

  const whitebeard = document.createElement('img');
  whitebeard.classList.add('dropdownimages');
  whitebeard.id = 'dropdownwhitebeard';
  whitebeard.src = whitebeardimage;
  dropdown.appendChild(whitebeard);

  const backtohomebutton = document.getElementById('backtohomebutton');
  backtohomebutton.addEventListener('click', () => {
    time.stoptimer();
  });

  playcontainer.appendChild(imageplayed);
  playcontainer.appendChild(startmodal);
  playcontainer.appendChild(tagmodal);
  playcontainer.appendChild(dropdown);

  content.appendChild(playcontainer);

  /* The following code was to get the hidden positions when creating position.js:
  const imagecoord = imageplayed.getBoundingClientRect();
  const imagecoordleft = imagecoord.left;
  const imagecoordtop = imagecoord.top;
  console.log(imagecoordleft, imagecoordtop); */

  startmodal.addEventListener('click', () => {
    // Starts the game
    startmodal.style.visibility = 'hidden';
    imageplayed.classList.remove('blurimage');
    time.starttimer();
    let xcoord = null;
    let ycoord = null;

    imageplayed.addEventListener('click', (e) => {
      // Get the clicks position
      xcoord = e.clientX + window.scrollX;
      ycoord = e.clientY + window.scrollY;

      // Removes tagmodal and dropdown when clicking outside them
      if (e.target !== tagmodal && e.target !== dropdown && dropdown.style.visibility === 'visible') {
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';

      // When the tagmodal and dropdown are not displayed, a click on the image
      // will make them appear at the clicks location.
      } else {
        tagmodal.style.left = `${xcoord - 20}px`;
        tagmodal.style.top = `${ycoord - 20}px`;
        tagmodal.style.visibility = 'visible';
        dropdown.style.left = `${xcoord + 25}px`;
        dropdown.style.top = `${ycoord - 20}px`;
        dropdown.style.visibility = 'visible';
      }
    });

    dropdown.addEventListener('click', (e) => {
      if ((e.target === waldo || odlaw || whitebeard) && (!foundCharacters.includes(e.target.id))) {
        foundCharacters.push(e.target.id);
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';
        console.log(foundCharacters);
      }
    });
  });
};

export default playImage;
