const io = require('socket.io')();

const getTime = () => {
  let a = new Date();
  let year = a.getFullYear();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
};

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', getTime());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);