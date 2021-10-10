const GameService = require("../services/game-service")();

module.exports = async (message) => {
  //const test = await GameService();
  //console.log(test.getGameServers());
  switch (message) {
    case "CREATENEWSERVER":
      GameService.getGameServers();
      GameService.createGameServer();
    default:
      break;
  }
};
