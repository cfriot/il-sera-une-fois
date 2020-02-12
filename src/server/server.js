import path from 'path';
import express from 'express';
import cors from 'cors';
import compression from 'compression';

import ssr from './ssr/';
import getRoutes from './apis.js';

/*
 ** createServer
 ** Create an express server that handles developpment or production
  */
async function createServer() {

  global.__isBrowser__ = false; // used by shared components

  const routes = await getRoutes(); // get routes for api plugin

  // both prod and dev
  const app = express()
    .disable('x-powered-by')
    .use(cors()) // allow cors
    .use(compression()) // gzip responses
    .use(routes) // declare apis
  ;

  // only in production
  if (process.env.NODE_ENV === 'production') {

    app
      .use(express.static('build/public')) // serve static files
      .use( // render and respond client app for requested route
        ssr({
          hot: false, // disable hot reload in production
          statsFile: './build/stats.json',
          cache: true,
        })
      )
    ;

    return app;
  }

  // for NODE_ENV != production
  const config = require(path.join(__dirname, '../../webpack.browser.js'));
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(config); // get webpack compiler

  app
    .use(express.static('src/public')) // serve static files
    .use(webpackDevMiddleware(compiler, { // create developpment server
      /* webpack middleware options */
      serverSideRender: true,
    }))
    .use(webpackHotMiddleware(compiler)) // hot reload shared components on change
    .use( // render and respond client app for requested route
      ssr({
        compiler,
        hot: true,
        statsFile: './src/stats.json',
      })
    )
  ;

  return app;
}

export default createServer;
