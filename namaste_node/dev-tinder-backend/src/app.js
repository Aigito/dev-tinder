const express = require('express');

const app = express();

app.listen(7777, () => {
  console.log("Message transmission from 7777: 'We hear you brothers'")
})

app.use("/", (req, res) => {
  res.send("We are waiting")
})
