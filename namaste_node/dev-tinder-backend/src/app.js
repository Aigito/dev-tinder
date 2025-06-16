const express = require('express');

const app = express();

app.listen(7777, () => {
  console.log("Message transmission from 7777: 'We hear you brothers'")
})

app.get("/users/:id/:name/:password", (req, res) => {
  console.log(req.params)
  res.send(`
    ID: ${req.params.id}
    Name: ${req.params.name}
    Password: ${req.params.password}
  `);
});

app.post("/users", (req, res) => {
  res.send("User successfully created")
})

app.patch("/users", (req, res) => {
  res.send("User successfully updated")
})

app.put("/users", (req, res) => {
  res.send("User successfully updated")
})


app.delete("/users", (req, res) => {
  res.send("User successfully deleted")
})
