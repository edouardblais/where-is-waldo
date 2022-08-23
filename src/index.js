import homePage from './components/homePage';
import homeHeader from './components/homeHeader';
import footer from './components/footer';
import playHeader from './components/playHeader';
import playImage from './components/playImage';
import showLeaderboard from './components/showLeaderboard';
import beachimage from './images/beach.jpg';
import snowimage from './images/snow.jpg';
import spaceimage from './images/space.jpg';

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
