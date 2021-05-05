const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on("connect", (data) => {
    console.log('Successfully connected to the server');
  });
  
  conn.on("data", (message) => {
    console.log("Server says:", message);
  });

  return conn;
};

console.log('Connecting...');
connect();