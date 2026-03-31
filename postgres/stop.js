const { spawn } = require("child_process");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data");

async function stop() {
  console.log("Stopping PostgreSQL...");

  const proc = spawn("pg_ctl", ["-D", DATA_DIR, "stop"], {
    stdio: "inherit",
  });

  proc.on("exit", (code) => {
    console.log("Stopped:", code);
  });
}

module.exports = stop;