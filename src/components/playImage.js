import {
  addDoc, collection, getFirestore,
} from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import waldoimage from '../images/waldo.png';
import odlawimage from '../images/odlaw.png';
import whitebeardimage from '../images/whitebeard.png';
import timer from './timer';
import firebasePositions from './firebasePositions';

const playImage = (image) => {
  let positions = null;

  const time = timer();

  const foundCharacters = [];

  const content = document.getElementById('maincontent');

  const firebaseConfig = {
    apiKey: 'AIzaSyAJi8yQ5LOymO6_qGx80ztG294zXujmGgg',
    authDomain: 'waldo-3e003.firebaseapp.com',
    projectId: 'waldo-3e003',
    storageBucket: 'waldo-3e003.appspot.com',
    messagingSenderId: '480350558276',
    appId: '1:480350558276:web:d7b280f31e65d124838411',
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  // import the position data from the firestore
  firebasePositions().then((response) => {
    positions = response;
  });

  // To check if tow numbers are within desired range
  const isWithinRange = (xclick, xdata, yclick, ydata) => {
    if ((xclick <= xdata + 20)
         && (xclick >= xdata - 20)
         && (yclick <= ydata + 20)
         && (yclick >= ydata - 20)
    ) {
      console.log(xclick, xdata, yclick, ydata);
      return true;
    }
    return false;
  };

  // To get the appropriate image for the upcoming adding to leaderboard logic
  const getImage = (source) => {
    let thisImage = '';
    if (source.endsWith('a3745.jpg')) {
      thisImage = 'beach';
    } else if (source.endsWith('e67a0.jpg')) {
      thisImage = 'snow';
    } else if (source.endsWith('52d40.jpg')) {
      thisImage = 'space';
    }
    return thisImage;
  };

  // To be called after each good pick to see if game is over and take further appropriate actions
  const hasWon = () => {
    if (foundCharacters.length === 3) {
      time.stoptimer();
      const winningTime = time.getTime();
      const timeSent = (winningTime.minute * 60 * 100)
      + (winningTime.seconds * 100)
      + (winningTime.centiseconds);

      const winningmodal = document.createElement('div');
      winningmodal.classList.add('winningmodal');
      winningmodal.innerHTML = `You found them all!\nYour time is ${winningTime.minute}:${winningTime.seconds}:${winningTime.centiseconds}`;

      const inputname = document.createElement('input');
      inputname.placeholder = 'Please enter your name!';
      inputname.classList.add('inputname');

      const addscore = document.createElement('button');
      addscore.classList.add('button');
      addscore.innerText = 'Add Score';

      const leaderboard = document.createElement('button');
      leaderboard.classList.add('button');
      leaderboard.innerText = 'See Leaderboard';

      const playagain = document.createElement('button');
      playagain.classList.add('button');
      playagain.innerText = 'Play Again';

      winningmodal.appendChild(inputname);
      winningmodal.appendChild(addscore);
      winningmodal.appendChild(leaderboard);
      winningmodal.appendChild(playagain);
      content.appendChild(winningmodal);

      let scoreName = '';
      inputname.addEventListener('input', (e) => {
        scoreName = e.target.value;
      });

      addscore.addEventListener('click', async () => {
        const thisImage = getImage(image);
        if (scoreName === '') {
          inputname.placeholder.style.color = 'red';
        } else {
          try {
            await addDoc(collection(db, 'leaderboard'), {
              Image: thisImage,
              Name: scoreName,
              Time: timeSent,
            });
          } catch (e) {
            console.log('Error adding to collection:', e);
          }
        }
      });
    }
  };

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

      // Getting the header images to blur spotted character in further logic
      const waldoHeader = document.getElementById('waldoheader');
      const odlawHeader = document.getElementById('odlawheader');
      const whitebeardHeader = document.getElementById('whitebeardheader');

      // Verification if clicked location on image corresponds to chosen hidden character
      const thisimage = getImage(image);
      if ((e.target === waldo)
        && (!foundCharacters.includes(e.target.id))
        && ((isWithinRange(xcoord, beachWaldoLeft, ycoord, beachWaldoTop) && (thisimage === 'beach'))
            || (isWithinRange(xcoord, snowWaldoLeft, ycoord, snowWaldoTop) && (thisimage === 'snow'))
            || (isWithinRange(xcoord, spaceWaldoLeft, ycoord, spaceWaldoTop) && (thisimage === 'space')))) {
        foundCharacters.push(e.target.id);
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';
        waldoHeader.classList.add('blurimage');
        hasWon();
      } else if ((e.target === odlaw)
        && (!foundCharacters.includes(e.target.id))
        && ((isWithinRange(xcoord, beachOdlawLeft, ycoord, beachOdlawTop) && (thisimage === 'beach'))
            || (isWithinRange(xcoord, snowOdlawLeft, ycoord, snowOdlawTop) && (thisimage === 'snow'))
            || (isWithinRange(xcoord, spaceOdlawLeft, ycoord, spaceOdlawTop) && (thisimage === 'space')))) {
        foundCharacters.push(e.target.id);
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';
        odlawHeader.classList.add('blurimage');
        hasWon();
      } else if ((e.target === whitebeard)
        && (!foundCharacters.includes(e.target.id))
        && ((isWithinRange(xcoord, beachWhitebeardLeft, ycoord, beachWhitebeardTop) && (thisimage === 'beach'))
            || (isWithinRange(xcoord, snowWhitebeardLeft, ycoord, snowWhitebeardTop) && (thisimage === 'snow'))
            || (isWithinRange(xcoord, spaceWhitebeardLeft, ycoord, spaceWhitebeardTop) && (thisimage === 'space')))) {
        foundCharacters.push(e.target.id);
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';
        whitebeardHeader.classList.add('blurimage');
        hasWon();
      } else {
        dropdown.style.visibility = 'hidden';
        tagmodal.style.visibility = 'hidden';
      }
    });
  });
};

export default playImage;
