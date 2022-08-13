import beachimage from '../images/beach.jpg';
import snowimage from '../images/snow.jpg';
import spaceimage from '../images/space.jpg';

const homeContent = () => {
  const content = document.getElementById('maincontent');

  const imagecontainer = document.createElement('div');
  imagecontainer.classList.add('imagecontainer');
  const beach = document.createElement('img');
  beach.classList.add('homeimages');
  beach.src = beachimage;
  imagecontainer.appendChild(beach);
  const snow = document.createElement('img');
  snow.classList.add('homeimages');
  snow.src = snowimage;
  imagecontainer.appendChild(snow);
  const space = document.createElement('img');
  space.classList.add('homeimages');
  space.src = spaceimage;
  imagecontainer.appendChild(space);

  content.appendChild(imagecontainer);
};

export default homeContent;
