const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();
app.enable('trust proxy');
app.use(helmet());
app.use(helmet.contentSecurityPolicy(middleware));
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
app.use(express.static(path.join('../dist/')));

app.listen(port, () => {
  console.log('Running on port ' + port);
});

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url);
  });
}

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
