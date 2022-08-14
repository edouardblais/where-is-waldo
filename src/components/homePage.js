import homeHeader from './homeHeader';
import homeContent from './homeContent';
import footer from './footer';

const homePage = () => {
  const content = document.getElementById('maincontent');
  content.innerHTML = '';
  homeHeader();
  homeContent();
  footer();
};

export default homePage;
