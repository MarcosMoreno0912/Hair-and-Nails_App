const server = require("./src/server");
const express = require('express');

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
