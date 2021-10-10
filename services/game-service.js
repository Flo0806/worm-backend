module.exports = () => {
  const gameServers = [];

  const getUniqueId = () => {
    const date = new Date();
    return +(
      date.getDate() +
      date.getMonth() +
      date.getFullYear() +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds() +
      date.getMilliseconds()
    );
  };

  const createGameServer = () => {
    const id = getUniqueId();
    console.log("ID", id);
    gameServers.push(id);
  };

  const getGameServers = () => {
    gameServers.forEach((data) => console.log("SERVER: ", data));
  };

  return { createGameServer, getGameServers };
};
