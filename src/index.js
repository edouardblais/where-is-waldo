import { initializeApp } from 'firebase/app';
import homeContent from './components/homeContent';
import homeHeader from './components/homeHeader';
import footer from './components/footer';
import playHeader from './components/playHeader';
import playBeach from './components/playBeach';
import playSnow from './components/playSnow';
import playSpace from './components/playSpace';
import beachimage from './images/beach.jpg';
import snowimage from './images/snow.jpg';
import spaceimage from './images/space.jpg';

const firebaseConfig = {
  apiKey: 'AIzaSyAJi8yQ5LOymO6_qGx80ztG294zXujmGgg',
  authDomain: 'waldo-3e003.firebaseapp.com',
  projectId: 'waldo-3e003',
  storageBucket: 'waldo-3e003.appspot.com',
  messagingSenderId: '480350558276',
  appId: '1:480350558276:web:d7b280f31e65d124838411',
};

const app = initializeApp(firebaseConfig);

const loadInitialPage = () => {
  homeHeader();
  homeContent();
  footer();
};

loadInitialPage();

const content = document.getElementById('maincontent');

document.addEventListener('click', (e) => {
  const imagechosen = e.target.src;

  if (imagechosen === beachimage.src) {
    content.innerHTML = '';
    playHeader();
    playBeach();
    footer();
  } else if (imagechosen === snowimage.src) {
    content.innerHTML = '';
    playHeader();
    playSnow();
    footer();
  } else if (imagechosen === spaceimage.src) {
    content.innerHTML = '';
    playHeader();
    playSpace();
    footer();
  }
});
