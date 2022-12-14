import homePage from './components/homePage';
import leaderboardHeader from './components/leaderboardHeader';
import footer from './components/footer';
import playHeader from './components/playHeader';
import playImage from './components/playImage';
import showLeaderboard from './components/showLeaderboard';
import Beach from './images/beach.jpg';
import Snow from './images/snow.jpg';
import Space from './images/space.jpg';

homePage();

document.addEventListener('click', (e) => {
  const content = document.getElementById('maincontent');
  const target = e.target.id;

  if (target === 'beachimage') {
    content.innerHTML = '';
    playHeader();
    playImage(Beach);
    footer();
  } else if (target === 'snowimage') {
    content.innerHTML = '';
    playHeader();
    playImage(Snow);
    footer();
  } else if (target === 'spaceimage') {
    content.innerHTML = '';
    playHeader();
    playImage(Space);
    footer();
  } else if (e.target.classList.contains('leaderboardbutton')) {
    content.innerHTML = '';
    leaderboardHeader();
    showLeaderboard();
    footer();
  } else if (target === 'backtohomebutton') {
    homePage();
  }
});
