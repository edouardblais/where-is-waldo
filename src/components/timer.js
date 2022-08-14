let time = 0;
const starttime = Date.now();
const timer = () => setInterval(() => {
  time = Date.now() - starttime;
  return time;
}, 1000);

export default timer;
