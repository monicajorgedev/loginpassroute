const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const PORT = 4000;

const middlewares = require('./middlewares');
const routes = require('./routes');

routes.setup(app);
middlewares.setupAPP(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });