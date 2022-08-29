import firebaseLeaderboard from './firebaseLeaderboard';
import beach from '../images/beach.jpg';
import snow from '../images/snow.jpg';
import space from '../images/space.jpg';

const showLeaderboard = () => {
  let currentLeaderboard = null;

  const content = document.getElementById('maincontent');

  const leaderboardBox = document.createElement('div');
  leaderboardBox.classList.add('leaderboardbox');

  const leaderboardtitle = document.createElement('h1');
  leaderboardtitle.innerText = 'Leaderboard';

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

  // import the winning time data from the firestore, sort it then display it
  firebaseLeaderboard().then((response) => {
    currentLeaderboard = response;

    currentLeaderboard.sort((time1, time2) => {
      if (time1.Time.minute < time2.Time.minute) {
        return -1;
      } if (time1.Time.minute > time2.Time.minute) {
        return 1;
      } if (time1.Time.minute === time2.Time.minute) {
        if (time1.Time.seconds < time2.Time.seconds) {
          return -1;
        } if (time1.Time.seconds > time2.Time.seconds) {
          return 1;
        } if (time1.Time.seconds === time2.Time.seconds) {
          if (time1.Time.centiseconds < time2.Time.centiseconds) {
            return -1;
          } if (time1.Time.centiseconds > time2.Time.centiseconds) {
            return 1;
          } if (time1.Time.centiseconds === time2.Time.centiseconds) {
            return 0;
          }
        }
      }
    });

    currentLeaderboard.map((item) => {
      if (item.Image === 'beach') {
        const beachscore = document.createElement('div');
        beachscore.classList.add('score');
        const beachname = document.createElement('p');
        const beachtime = document.createElement('p');
        beachname.innerHTML = `${item.Name}`;
        beachtime.innerHTML = `${item.Time.minute}m : ${item.Time.seconds}s : ${item.Time.centiseconds}cs`;
        beachscore.appendChild(beachname);
        beachscore.appendChild(beachtime);
        beachBox.appendChild(beachscore);
      } else if (item.Image === 'snow') {
        const snowscore = document.createElement('div');
        snowscore.classList.add('score');
        const snowname = document.createElement('p');
        const snowtime = document.createElement('p');
        snowname.innerHTML = `${item.Name}`;
        snowtime.innerHTML = `${item.Time.minute}m : ${item.Time.seconds}s : ${item.Time.centiseconds}cs`;
        snowscore.appendChild(snowname);
        snowscore.appendChild(snowtime);
        snowBox.appendChild(snowscore);
      } else if (item.Image === 'space') {
        const spacescore = document.createElement('div');
        spacescore.classList.add('score');
        const spacename = document.createElement('p');
        const spacetime = document.createElement('p');
        spacename.innerHTML = `${item.Name}`;
        spacetime.innerHTML = `${item.Time.minute}m : ${item.Time.seconds}s : ${item.Time.centiseconds}cs`;
        spacescore.appendChild(spacename);
        spacescore.appendChild(spacetime);
        spaceBox.appendChild(spacescore);
      }
    });
  });

  leaderboardBox.appendChild(beachBox);
  leaderboardBox.appendChild(snowBox);
  leaderboardBox.appendChild(spaceBox);

  content.appendChild(leaderboardtitle);
  content.appendChild(leaderboardBox);
};

export default showLeaderboard;
