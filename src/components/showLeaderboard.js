import firebaseLeaderboard from './firebaseLeaderboard';
import beach from '../images/beach.jpg';
import snow from '../images/snow.jpg';
import space from '../images/space.jpg';

const showLeaderboard = () => {
  let currentLeaderboard = null;

  const content = document.getElementById('maincontent');

  const leaderboardBox = document.createElement('div');
  leaderboardBox.classList.add('leaderboardbox');

  const beachBox = document.createElement('div');
  beachBox.classList.add('imagescorebox');
  const beachimage = document.createElement('img');
  beachimage.src = beach;
  beachimage.classList.add('homeimages');
  beachBox.appendChild(beachimage);

  const snowBox = document.createElement('div');
  snowBox.classList.add('imagescorebox');
  const snowimage = document.createElement('img');
  snowimage.src = snow;
  snowimage.classList.add('homeimages');
  snowBox.appendChild(snowimage);

  const spaceBox = document.createElement('div');
  spaceBox.classList.add('imagescorebox');
  const spaceimage = document.createElement('img');
  spaceimage.src = space;
  spaceimage.classList.add('homeimages');
  spaceBox.appendChild(spaceimage);

  // import the position data from the firestore
  firebaseLeaderboard().then((response) => {
    currentLeaderboard = response;
    currentLeaderboard.map((item) => {
      if (item.Image === 'beach') {
        const beachscore = document.createElement('p');
        beachscore.innerHTML = `${item.Name} : ${item.Time}`;
        beachBox.appendChild(beachscore);
      } else if (item.Image === 'snow') {
        const snowscore = document.createElement('p');
        snowscore.innerHTML = `${item.Name} : ${item.Time}`;
        snowBox.appendChild(snowscore);
      } else if (item.Image === 'space') {
        const spacescore = document.createElement('p');
        spacescore.innerHTML = `${item.Name} : ${item.Time}`;
        spaceBox.appendChild(spacescore);
      }
    });
  });

  leaderboardBox.appendChild(beachBox);
  leaderboardBox.appendChild(snowBox);
  leaderboardBox.appendChild(spaceBox);

  content.appendChild(leaderboardBox);
};

export default showLeaderboard;
