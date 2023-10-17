const { stdin } = require("process");
const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("bye");
    process.exit();
  }
}
stdin.on("data", handleUserInput);

setupInput();