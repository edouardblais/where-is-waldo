const timer = () => {
  let totalseconds = 0;
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
    document.getElementById('timer').innerHTML = `${hour}:${minute}:${seconds}`;
  };
  const starttimer = setInterval(formatTimer, 1000);
  return { starttimer };
};

export default timer;
