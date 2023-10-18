const net = require("net");
const { host, port, encoding } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host,
    port,
  });

  // interpret incoming data as text
  conn[encoding];
  
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: RTQ");
  });

  return conn;
};

module.exports = {connect};