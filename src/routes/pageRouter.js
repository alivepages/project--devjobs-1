const Router = require('express').Router;
const fs = require('fs-extra');

const pageRouter = Router();
const PATH = `${__dirname}/src/views/home.html`;

pageRouter
  .get('/', (req, res) => {
    res.render('home');
  });

pageRouter
  .get('/about', (req, res) => {
    res.render('about');
  });

module.exports = pageRouter;
