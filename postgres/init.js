const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data");

function initDB() {
  if (fs.existsSync(DATA_DIR)) return;

  console.log("Initializing database...");

  spawnSync("initdb", ["-D", DATA_DIR], {
    stdio: "inherit",
  });
}

module.exports = initDB;