'use strict';

const crawler    = require('./lib/crawler');
const parse      = require('./lib/parse');
const fs         = require('fs');

let anos = [ 2012, 2013, 2014, 2015, 2016];

if (process.argv.length > 2)
  anos = process.argv.slice(2);

Promise.all(anos.map(ano => { return crawler.get(ano)} ))
  .then(function (data) {
    data.forEach(function (elem) {
      let arquivo = fs.createWriteStream('data/brasileiro' + elem.ano + '.json');

      arquivo.on('error', function(err) { /* error handling */ });
      elem.data('.tabela-jogos').find('.row.full-game').each(function (i) {
          arquivo.write(JSON.stringify(parse.jogoCampeonatoBrasileiro(elem.data(this))) + '\n');
      })
      arquivo.end();

      console.log(arquivo.path);
    })
  })
