'use strict';

const crawler    = require('./lib/crawler');
const parser = require('./lib/parser');
const cheerio    = require('cheerio');
const fs         = require('fs');
const url        = "http://www.cbf.com.br/competicoes/brasileiro-serie-a/tabela/2016";

crawler.get(url)
  .then(function(data) {
    let jogos = parser.getJogos(data);

    let file = fs.createWriteStream('data/brasileiro.json');

    file.on('error', function(err) { /* error handling */ });
    jogos.forEach(function(jogo) {
      file.write(JSON.stringify(jogo) + '\n');
    });
    file.end();

  })
  .catch(
    (err) => console.error(err)
  );
