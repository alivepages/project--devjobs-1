const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');

const pageRouter = require('./src/routes/pageRouter.js');

const app = express();

// Configure EJS templatte engine
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

// Static files
app.use(express.static(`${__dirname}/public`));

app.use('/', pageRouter);

app.use((req, res) => {
  res.render('404');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`);
})
