let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) =>  {
    if (key === '\u0003') {
      console.log('You have left the game. Goodbye!');
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }

    if (key === 'h') {
      connection.write('Say: Hello!');
    }
    if (key === 'g') {
      connection.write('Say: Goodbye');
    }
    if (key === 't') {
      connection.write('Say: IM GOIN FAST');
    }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};