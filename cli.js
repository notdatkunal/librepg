#!/usr/bin/env node

const start = require("./postgres/start");
const stop = require("./postgres/stop");

const command = process.argv[2];

(async () => {
  switch (command) {
    case "start":
      await start();
      break;
    case "stop":
      await stop();
      break;
    default:
      console.log(`
librepg - run PostgreSQL locally

Usage:
  librepg start
  librepg stop
`);
  }
})();