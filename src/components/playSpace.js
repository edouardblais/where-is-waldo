import spaceimage from '../images/space.jpg';

const playSpace = () => {
  const content = document.getElementById('maincontent');

  const playcontainer = document.createElement('div');
  playcontainer.classList.add('playcontainer');

  const space = document.createElement('img');
  space.classList.add('playimage');
  space.classList.add('blurimage');
  space.src = spaceimage;
  playcontainer.appendChild(space);

  content.appendChild(playcontainer);
};

export default playSpace;
