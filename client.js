const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on("connect", (data) => {
    console.log('Successfully connected to the game server.');
    conn.write('Name: DAV');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500);
  });
  
  conn.on("data", (message) => {
    console.log("Server says:", message);
  });

  return conn;
};

module.exports = {
  connect
}