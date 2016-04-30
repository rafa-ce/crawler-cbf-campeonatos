'use strict'

let cheerio = require('cheerio');

class HtmlParser {
  getGames(data){
    var $ = cheerio.load(data);

    var hora = [];
    var mandantes = [];
    var visitantes = [];
    var placar = [];

    $(".tabela-jogos").each(function(i) {
      var n = i + 1;
      console.log("Rodada " + n);

      $(this).find(".full-game").find(".full-game-time").each(function(i, elem) { hora[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-team-1").each(function(i, elem) { mandantes[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-team-2").each(function(i, elem) { visitantes[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-score").each(function(i, elem) { placar[i] = $(this).text().replace(/^\s+|\s+$/gm,'').replace(/(\r\n|\n|\r)/gm,"");});

      for(var i = 0; i < 10; i++) {
        console.log(hora[i] + " - " + mandantes[i] + " " + placar[i] + " " + visitantes[i]);
      }
    });
  }
}

module.exports = new HtmlParser();
