// The demo app for the whole course: a zero-dependency Node.js web server.
// It answers with its hostname (so you can SEE which container replied),
// a visit counter, and its version — perfect for every lesson's experiments.
const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;          // lesson 04: -e PORT=...
const VERSION = process.env.APP_VERSION || "v1"; // change me between builds!
let visits = 0;

const server = http.createServer((req, res) => {
  visits++;
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`); // lesson 04: docker logs
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    `🍱 hello from ${os.hostname()}\n` +
    `version: ${VERSION}\n` +
    `visits (this container only): ${visits}\n`
  );
});

server.listen(PORT, () => console.log(`listening on ${PORT} (${VERSION})`));

// Stop cleanly when Docker asks (docker stop sends SIGTERM):
process.on("SIGTERM", () => { console.log("bye 👋"); server.close(() => process.exit(0)); });
