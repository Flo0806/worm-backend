const app = require("./app");
const http = require("http");
const WebSocketServer = require("./services/websocketServer");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const config_esr = {
  user: "bakery",
  password: "wpN5eVntu0!%p4",
  server: "a1597glbakery.de.globusgrp.org", // You can use 'localhost\\instance' to connect to named instance
  database: "Backup_HS.GLOBUS.GASTRO.MDF",
  dialectOptiond: "bakerydb",
  port: 1933,
  options: {
    enableArithAbort: false,
  },
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  console.log("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3200");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

WebSocketServer(server);
