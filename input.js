const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) =>  {
    if (key === '\u0003') {
      console.log('You have left the game. Goodbye!');
      process.exit();
    }
    // if (key === '\033[A') {
    //   console.log('You have pressed the up key');
    // }
    // if (key === '\033[B') {
    //   console.log('You have pressed the down key');
    // }
    // if (key === '\033[D') {
    //   console.log('You have pressed the left key');
    // }
    // if (key === '\033[C') {
    //   console.log('You have pressed the right key');
    // }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};