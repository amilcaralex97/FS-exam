const app = require("./server.js");

async function main() {
  //initialize the server

  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
