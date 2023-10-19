const { stdin } = require("process");
const { sayings, key_mappings } = require("./constants")
// setup interface to handle user input from stdin
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("bye");
    process.exit();
  }

  // determines movement based on wasd
  if (key_mappings[key]) {
    connection.write(`Move: ${key_mappings[key]}`);
  }

  // outputs the sayings based on key pressed
  if (sayings[key]) {
    connection.write("Say: " + sayings[key]);
  }
};

stdin.on("data", handleUserInput);


module.exports = { setupInput };