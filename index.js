'use strict';


const crawler    = require('./lib/crawler');
let Parse = require('./lib/parse'), parse = new Parse();
const fs         = require('fs');

let anos = [ 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019 ];

if (process.argv.length > 2)
  anos = process.argv.slice(2);

fs.mkdir('data', { recursive: true }, (err) => {
  if (err) throw err;
});

Promise.all(anos.map(ano => { return crawler.get(ano)} ))
  .then(function (data) {
    data.forEach(function (elem) {
      let arquivo = fs.createWriteStream('data/brasileiro' + elem.ano + '.json');

      arquivo.on('error', function(err) { /* error handling */ });
      parse.todasAsRodadas(elem.data).each(function (i) {
        let rodada = parse.numeroRodada(elem.data(this));
        let jogos = parse.todosOsJogos(elem.data(this));
        
        jogos.each(function (i) {
          var detalhes = parse.detalhesJogo(elem.data(this), rodada, elem.ano);
          arquivo.write(JSON.stringify(detalhes) +'\n');
        })
      })
      arquivo.end();

      console.log(arquivo.path);
    })
})