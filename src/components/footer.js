const footer = () => {
  const content = document.getElementById('maincontent');

  const footercontainer = document.createElement('div');
  footercontainer.classList.add('footercontainer');
  footercontainer.innerText = 'Made with love, by Ed';
  content.appendChild(footercontainer);
};

export default footer;
