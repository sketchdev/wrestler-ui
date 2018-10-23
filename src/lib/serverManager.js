const servers = {};
const Server = require('./server');

exports.newServer = (port, config, rootUser, nodeEnv, morganFormat) => {
  if (servers[port]) {
    return false;
  }
  servers[port] = new Server({ port, config, rootUser, nodeEnv, morganFormat });
  return true
};

exports.startServer = async (port) => {
  const server = servers[port];
  if (!server) {
    return false
  }
  await server.run();
  return true;
};

const stopServer = exports.stopServer = async (port) => {
  const server = servers[port];
  if (!server) {
    return false
  }
  await server.close();
  return true;
};

exports.removeServer = async (port) => {
  await stopServer();
  delete servers[port];
};
