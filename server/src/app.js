const express = require('express');
const cors = require('cors');
const app  = express();

const routes = require('./routes');

// Utizamos o express.json para poder converter a mensagem para o formato json
app.use(express.json());

// O Cors permite que os navegadores possam realizar as requisições ao servidor sem que haja algum problema 
app.use(cors());

// Caminho para as rotas do robô e a home
app.use('/', routes);

module.exports = app;