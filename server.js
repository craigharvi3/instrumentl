/* eslint-disable no-console */
require('babel-core/register');

const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const { getPacks } = require('./app/api/packs');
const config = require('./app/db');

// Setup static assets
const setCustomCacheControl = (res, path) => {
  if (serveStatic.mime.lookup(path) === 'image/png') {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
};

// Create server
const server = express();

// Mongo session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Otherwise errors thrown in Promise routines will be silently swallowed.
// (e.g. any error during rendering the app server-side!)
process.on('unhandledRejection', (reason, p) => {
  if (reason.stack) {
    console.error(reason.stack);
    return;
  }
  console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

server.use(session({
  secret: 'ufcbrowser',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: config.DB })
}));

// Remove X-Powered-By: Express header
server.disable('x-powered-by');

server.use(cookieParser());

//setup middleware for post requests
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(serveStatic(path.resolve(__dirname, 'dist'), {
  // maxAge: '1d',
  // setHeaders: setCustomCacheControl
}));

server.get('/api/packs', (req, res) => {
  res.send(getPacks());
});

server.get('*', require('./app/index').serverMiddleware);

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`⚡⚡⚡ Server running on http://localhost:${port}/`);
});