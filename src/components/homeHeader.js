const homeHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('headercontainer');
  headercontainer.innerText = 'Header';
  content.appendChild(headercontainer);
};

export default homeHeader;
