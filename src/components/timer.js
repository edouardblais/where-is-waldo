const timer = () => {
  let totalseconds = 0;
  let cron = null;
  const formatTimer = () => {
    totalseconds += 1;
    const hour = (Math.floor(totalseconds / 3600)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const minute = (Math.floor((totalseconds - hour * 3600) / 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    const seconds = (totalseconds - (hour * 3600 + minute * 60)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    if (totalseconds !== 0) {
      document.getElementById('timer').innerHTML = `${hour}:${minute}:${seconds}`;
    } else {
      document.getElementById('timer').innerHTML = '00:00:00';
    }
  };
  const stoptimer = () => {
    clearInterval(cron);
    document.getElementById('timer').innerHTML = '00:00:00';
  };
  const starttimer = () => {
    stoptimer();
    cron = setInterval(formatTimer, 1000);
  };
  return { starttimer, stoptimer };
};

export default timer;
