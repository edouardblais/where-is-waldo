const timer = () => {
  let totalcentiseconds = 0;
  let cron = null;

  const getTime = () => {
    totalcentiseconds += 1;
    const minute = (Math.floor((totalcentiseconds) / 6000)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      maximumSignificantDigits: 2,
      useGrouping: false,
    });
    const seconds = Math.floor(((totalcentiseconds - (minute * 6000)) / 100)).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      maximumSignificantDigits: 2,
      useGrouping: false,
    });
    const centiseconds = Math.floor((totalcentiseconds - (seconds * 100 + minute * 6000))).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      maximumSignificantDigits: 2,
      useGrouping: false,
    });
    document.getElementById('timer').innerHTML = `${minute}:${seconds}:${centiseconds}`;

    return { minute, seconds, centiseconds };
  };

  const starttimer = () => {
    cron = setInterval(getTime, 10);
  };

  const stoptimer = () => {
    clearInterval(cron);
  };

  return { starttimer, stoptimer, getTime };
};

export default timer;
