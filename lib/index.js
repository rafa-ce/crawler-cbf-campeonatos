'use strict';

let crawler    = require('./crawler'),
    htmlParser = require('./htmlParser'),
    cheerio    = require('cheerio'),
    url        = "http://www.cbf.com.br/competicoes/brasileiro-serie-a/tabela/2015";

crawler.get(url)
  .then(function(data) {
    htmlParser.getGames(data);
  })
  .catch(
    (err) => console.error(err)
  );
