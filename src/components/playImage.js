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
    imageplayed.addEventListener('click', (e) => {
      // Get the clicks position
      const xcoord = e.clientX + window.scrollX;
      const ycoord = e.clientY + window.scrollY;

      // Removes tagmodal and dropdown when clicking outside them
      if (e.target !== tagmodal && e.target !== dropdown && dropdown.style.visibility === 'visible') {
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';

      // If the user picks the character in the dropdown when the previous click
      // was within the acceptable range of the characters position, and if that character
      // has not been found already, it is added to hiddenCharacters array.
      // If the array is completed, the game is over, the timer is stopped,
      // and the time is recorded and added to the leaderboard collection.
      } else if (
        (e.target === (whitebeard || odlaw || waldo))
           && (!foundCharacters.includes(e.target))
      ) {
        foundCharacters.push(e.target);
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
  });
};

export default playImage;
