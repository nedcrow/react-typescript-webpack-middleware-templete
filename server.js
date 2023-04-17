const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.get('/hello-world', (req, res) => {
  res.send('Hello, world!');
});

app.get('/hello-world222', (req, res) => {
  res.send('Hello, world 12345');
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});