const express = require("express");

const server = express();

server.use(
  express.static("public", {
    extensions: ["html"]
  })
);

server.listen(5000, () => console.log("Listening for public stuff!"));
