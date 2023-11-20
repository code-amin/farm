const helmet = require("helmet");
const express = require("express");
const morgan = require("morgan");

express()
  .use(helmet())
  .use(morgan("tiny"))

  .get("/hello", (req, res) => {
    res.status(200).json({ status: 200, message: "hi!" });
  })

  .listen(8000, () => {
    console.log(`Example app listening on port 8000}`);
  });
 