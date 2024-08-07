const HTTP = require(`http`);
const PORT = 3000;

const SERVER = HTTP.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
