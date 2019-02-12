import express from "express";

const app = express();



app.get('/', (req, res) => {

res.send('ere;lskfg r4ew6546345 5f')
  res.end();

});



app.listen(5000, () => {
  console.log("Server started");
});
