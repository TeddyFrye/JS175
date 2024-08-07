const HTTP = require(`http`);
const URL = require(`url`).URL;
const PORT = 3000;

function dieRoll(diceNum) {
  return Math.floor(Math.random() * diceNum + 1);
}

const SERVER = HTTP.createServer((req, res) => {
  const myURL = new URL(req.url, `http://localhost:${PORT}`);
  let queryString = myURL.searchParams;

  let diceResult = dieRoll(queryString.get(`sides`));
  res.statusCode = 200;
  res.setHeader(`Content-Type`, `text/plain`);
  res.write(`${diceResult}\n`);
  let rollAmount = queryString.get(`rolls`);
  while (rollAmount > 1) {
    diceResult = dieRoll(queryString.get(`sides`));
    res.write(`${diceResult}\n`);
    rollAmount -= 1;
  }
  res.end();
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
