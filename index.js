// index.js
// where your node app starts

// init project
require('dotenv').config();
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  let ip = req.socket.remoteAddress;
  let lang = req.headers["accept-language"];
  let agent = req.headers["user-agent"];
  // console.log("ip: " + ip);
  // console.log("language: " + lang);
  // console.log("user: " + agent);
  res.json({"ipaddress":ip, "language":lang, "software":agent});
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
