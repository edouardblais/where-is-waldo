import beachimage from '../images/beach.jpg';
import snowimage from '../images/snow.jpg';
import spaceimage from '../images/space.jpg';

const homeContent = () => {
  const content = document.getElementById('maincontent');

  const homecontentcontainer = document.createElement('div');
  homecontentcontainer.classList.add('homecontentcontainer');

  const imagecontainer = document.createElement('div');
  imagecontainer.classList.add('imagecontainer');

  const beach = document.createElement('img');
  beach.classList.add('homeimages');
  beach.id = 'beachimage';
  beach.src = beachimage;
  imagecontainer.appendChild(beach);

  const snow = document.createElement('img');
  snow.classList.add('homeimages');
  snow.id = 'snowimage';
  snow.src = snowimage;
  imagecontainer.appendChild(snow);

  const space = document.createElement('img');
  space.classList.add('homeimages');
  space.id = 'spaceimage';
  space.src = spaceimage;
  imagecontainer.appendChild(space);

  const leaderboard = document.createElement('button');
  leaderboard.innerText = 'View Leaderboard';
  leaderboard.id = 'leaderboardbutton';
  leaderboard.classList.add('button');
  leaderboard.classList.add('leaderboardbutton');

  homecontentcontainer.appendChild(imagecontainer);
  homecontentcontainer.appendChild(leaderboard);

  content.appendChild(homecontentcontainer);
};

export default homeContent;
