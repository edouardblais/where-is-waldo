const timer = () => {
  let time = 0;

  const start = () => {
    const starttime = Date.now();
    time = setInterval(() => {
      const timeelapsed = Date.now() - starttime;
      return timeelapsed;
    }, 1000);
    return time;
  };

  const stop = () => {
    clearInterval(time);
  };

  return { start, stop, time };
};

export default timer;
