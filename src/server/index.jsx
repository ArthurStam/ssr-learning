import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { StaticRouter } from 'react-router-dom';
import { App } from '../App';
import {getUsers} from '../api';
import { DataProvider } from '../DataProvider';

const app = express();
const port = process.env.PORT || 3000;
const appRoot = process.cwd();

const staticFiles = JSON.parse(fs.readFileSync(path.resolve(appRoot, './static/manifest.json')));
const { js, css } = Object.values(staticFiles).reduce((acc, item) => {
  if (item.endsWith('.js')) {
    acc.js.push(item);
  }
  if (item.endsWith('.css')) {
    acc.css.push(item);
  }
  return acc;
}, { js: [], css: [] });

app.set('views', path.resolve(appRoot, './views'));
app.use('/static', express.static('static'));
app.set('view engine', 'pug');

app.get('/api/users', (req, res) => {
  getUsers().then((users) => {
    res.json({ users });
  });
});

app.get('/', (req, res, next) => {
  getUsers().then((users) => {
    req.appData = { users };
    next();
  })
})

app.get(/.+/, (req, res) => {
  const appData = req.appData || {};
  res.render('index', {
    content: ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <DataProvider initialData={appData}>
          <App />
        </DataProvider>
      </StaticRouter>
    ),
    appData: JSON.stringify(appData),
    js,
    css,
  });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
