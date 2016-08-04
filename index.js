'use strict';

const crawler    = require('./lib/crawler');
const htmlParser = require('./lib/parser');
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
          const gameInfo = elem.data(this).parent().parent().children('.col-md-12.col-lg-12');
          arquivo.write(JSON.stringify(htmlParser.jogo(gameInfo)) + '\n');
      })
      arquivo.end();

      console.log(arquivo.path);
    })
  })
