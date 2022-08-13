const homeHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('headercontainer');
  headercontainer.innerText = "Where's Waldo?";
  content.appendChild(headercontainer);
};

export default homeHeader;
