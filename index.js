import app from "./app";
import httpServer from "http";

const server = httpServer.Server(app);

async function main() {
  await server.listen(4000);
  console.log(`Server listening on port ${4000}`);
}

main();
