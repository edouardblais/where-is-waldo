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

  // function to check if tow numbers are within desired range
  const isWithinRange = (xclick, xdata, yclick, ydata) => {
    if ((xclick <= xdata + 100)
         && (xclick >= xdata - 100)
         && (yclick <= ydata + 100)
         && (yclick >= ydata - 100)
    ) {
      return true;
    }
  };

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
      // Giving variables to the positions to facilitate further checking for spotted character
      const beachWaldoLeft = positions[0].Position.Beach.Waldo.left;
      const beachWaldoTop = positions[0].Position.Beach.Waldo.top;
      const beachOdlawLeft = positions[0].Position.Beach.Odlaw.left;
      const beachOdlawTop = positions[0].Position.Beach.Odlaw.top;
      const beachWhitebeardLeft = positions[0].Position.Beach.Whitebeard.left;
      const beachWhitebeardTop = positions[0].Position.Beach.Whitebeard.top;

      const snowWaldoLeft = positions[0].Position.Snow.Waldo.left;
      const snowWaldoTop = positions[0].Position.Snow.Waldo.top;
      const snowOdlawLeft = positions[0].Position.Snow.Odlaw.left;
      const snowOdlawTop = positions[0].Position.Snow.Odlaw.top;
      const snowWhitebeardLeft = positions[0].Position.Snow.Whitebeard.left;
      const snowWhitebeardTop = positions[0].Position.Snow.Whitebeard.top;

      const spaceWaldoLeft = positions[0].Position.Space.Waldo.left;
      const spaceWaldoTop = positions[0].Position.Space.Waldo.top;
      const spaceOdlawLeft = positions[0].Position.Space.Odlaw.left;
      const spaceOdlawTop = positions[0].Position.Space.Odlaw.top;
      const spaceWhitebeardLeft = positions[0].Position.Space.Whitebeard.left;
      const spaceWhitebeardTop = positions[0].Position.Space.Whitebeard.top;

      if ((e.target === waldo) && (!foundCharacters.includes(e.target.id))) {
        if ((isWithinRange(xcoord, beachWaldoLeft, ycoord, beachWaldoTop))
            || (isWithinRange(xcoord, snowWaldoLeft, ycoord, snowWaldoTop))
            || (isWithinRange(xcoord, spaceWaldoLeft, ycoord, spaceWaldoTop))) {
          foundCharacters.push(e.target.id);
          dropdown.style.visibility = 'hidden';
          tagmodal.style.visibility = 'hidden';
          console.log(foundCharacters);
        }
      } else if ((e.target === odlaw) && (!foundCharacters.includes(e.target.id))) {
        if ((isWithinRange(xcoord, beachOdlawLeft, ycoord, beachOdlawTop))
            || (isWithinRange(xcoord, snowOdlawLeft, ycoord, snowOdlawTop))
            || (isWithinRange(xcoord, spaceOdlawLeft, ycoord, spaceOdlawTop))) {
          foundCharacters.push(e.target.id);
          dropdown.style.visibility = 'hidden';
          tagmodal.style.visibility = 'hidden';
          console.log(foundCharacters);
        }
      } else if ((e.target === whitebeard) && (!foundCharacters.includes(e.target.id))) {
        if ((isWithinRange(xcoord, beachWhitebeardLeft, ycoord, beachWhitebeardTop))
            || (isWithinRange(xcoord, snowWhitebeardLeft, ycoord, snowWhitebeardTop))
            || (isWithinRange(xcoord, spaceWhitebeardLeft, ycoord, spaceWhitebeardTop))) {
          foundCharacters.push(e.target.id);
          dropdown.style.visibility = 'hidden';
          tagmodal.style.visibility = 'hidden';
          console.log(foundCharacters);
        }
      }
    });
  });
};

export default playImage;
