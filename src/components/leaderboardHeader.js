const leaderboardHeader = () => {
  const content = document.getElementById('maincontent');

  const headercontainer = document.createElement('div');
  headercontainer.classList.add('leaderboardheadercontainer');

  const leaderboardtitle = document.createElement('h1');
  leaderboardtitle.innerText = 'Leaderboard';
  leaderboardtitle.classList.add('leaderboardtitle');

  const backtohome = document.createElement('button');
  backtohome.innerText = 'Back To Home';
  backtohome.id = 'backtohomebutton';
  backtohome.classList.add('button');

  headercontainer.appendChild(leaderboardtitle);
  headercontainer.appendChild(backtohome);

  content.appendChild(headercontainer);
};

export default leaderboardHeader;
