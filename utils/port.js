const net = require("net");

function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close();
      resolve(true);
    });

    server.listen(port);
  });
}

async function getPort(start = 5432) {
  let port = start;

  while (!(await checkPort(port))) {
    port++;
  }

  return port;
}

module.exports = getPort;