const { stdin } = require("process");
// setup interface to handle user input from stdin
let connection;

const setupInput = function (conn) {
  connection = conn;
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
  } if (key === "w") {
    connection.write("Move: up");
  }  if (key === "a") {
    connection.write("Move: left")
  }  if (key === "s") {
    connection.write("Move: down")
  }  if (key === "d") {
    connection.write("Move: right")
  }
}

stdin.on("data", handleUserInput);


module.exports = {setupInput}