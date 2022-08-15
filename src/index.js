import { initializeApp } from 'firebase/app';
import homePage from './components/homePage';
import homeHeader from './components/homeHeader';
import footer from './components/footer';
import playHeader from './components/playHeader';
import playImage from './components/playImage';
import showLeaderboard from './components/showLeaderboard';
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

homePage();

document.addEventListener('click', (e) => {
  const content = document.getElementById('maincontent');
  const target = e.target.id;

  if (target === 'beachimage') {
    content.innerHTML = '';
    playHeader();
    playImage(beachimage);
    footer();
  } else if (target === 'snowimage') {
    content.innerHTML = '';
    playHeader();
    playImage(snowimage);
    footer();
  } else if (target === 'spaceimage') {
    content.innerHTML = '';
    playHeader();
    playImage(spaceimage);
    footer();
  } else if (target === 'leaderboardbutton') {
    content.innerHTML = '';
    homeHeader();
    showLeaderboard();
    footer();
  } else if (target === 'backtohomebutton') {
    homePage();
  }
});
