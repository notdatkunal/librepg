const { spawn } = require("child_process");
const path = require("path");
const initDB = require("./init");
const getPort = require("../utils/port");

const DATA_DIR = path.join(process.cwd(), "data");

async function start() {
  initDB();

  const port = await getPort();

  console.log(`Starting PostgreSQL on port ${port}...`);

  const proc = spawn(
    "pg_ctl",
    ["-D", DATA_DIR, "-o", `-p ${port}`, "start"],
    { stdio: "inherit" }
  );

  proc.on("exit", (code) => {
    console.log("Postgres process exited:", code);
  });
}

module.exports = start;