import beachimage from '../images/beach.jpg';

const playBeach = () => {
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const beach = document.createElement('img');
  beach.classList.add('playimage');
  beach.src = beachimage;
  playcontainer.appendChild(beach);

  content.appendChild(playcontainer);
};

export default playBeach;
