const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf8');

  conn.on("connect", (data) => {
    console.log('Successfully connected to the game server.');
    conn.write('Name: DAV');
  });
  
  conn.on("data", (message) => {
    console.log("Server says:", message);
  });

  return conn;
};

module.exports = {
  connect
};