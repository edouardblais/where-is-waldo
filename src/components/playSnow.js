import snowimage from '../images/snow.jpg';

const playSnow = () => {
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const snow = document.createElement('img');
  snow.classList.add('playimage');
  snow.src = snowimage;
  playcontainer.appendChild(snow);

  content.appendChild(playcontainer);
};

export default playSnow;
