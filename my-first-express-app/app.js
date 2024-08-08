const express = require(`express`);
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set(`view engine`, `pug`);

app.use(express.static("public"));
app.use(morgan("common"));

app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`/account`, (req, res) => {
  res.render(`account`, { money: `$16,000`, recentTransaction: true });
});

app.get(`/account-english`, (req, res) => {
  res.redirect("/account");
});

app.get(`/account-french`, (req, res) => {
  res.render(`account-french`, { money: `$16,000`, recentTransaction: true });
});

app.get(`/account-serbian`, (req, res) => {
  res.render(`account-serbian`, { money: `$16,000`, recentTransaction: false });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
