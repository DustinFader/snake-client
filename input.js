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
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left")
  }

  if (key === "s") {
    connection.write("Move: down")
  }
  
  if (key === "d") {
    connection.write("Move: right")
  }

  if (key === "!") {
    connection.write("Say: Yahooooo!")
  }

  if (key === "Q") {
    connection.write("Say: Waaahhhh!")
  }

  if (key === "U") {
    connection.write("Say: Holy bonkers!")
  }

  if (key === "f") {
    connection.write("Say: .....boop.....")
  }
  if (key === "1") {
    connection.write("Say: (ง ͠ ᵒ̌ Дᵒ̌ )▬▬ι═══════ﺤ")
  }
  if (key === "2") {
    connection.write("Say: ƪ(“╰ _ ╯ )ʃ")
  }
  if (key === "3") {
    connection.write("Say: ಠ෴ಠ")
  }
  if (key === "4") {
    connection.write("Say: (ᴗᵔᴥᵔ)")
  }
  if (key === "5") {
    connection.write("Say: ≖‿≖")
  }
}

stdin.on("data", handleUserInput);


module.exports = {setupInput}