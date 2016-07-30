'use strict'

const cheerio = require('cheerio');

class Parser {
  getJogos(data){
    const $ = cheerio.load(data);

    let hora = [];
    let mandantes = [];
    let visitantes = [];
    let placar = [];

    let jogos = [];

    $(".tabela-jogos").each(function(i) {
      let n = i + 1;

      $(this).find(".full-game").find(".full-game-time").each(function(i, elem) { hora[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-team-1").each(function(i, elem) { mandantes[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-team-2").each(function(i, elem) { visitantes[i] = $(this).text().trim();});
      $(this).find(".full-game").find(".row.game").find(".game-score").each(function(i, elem) { placar[i] = $(this).text().replace(/^\s+|\s+$/gm,'').replace(/(\r\n|\n|\r)/gm,"");});

      for(var i = 0; i < 10; i++) {
        let jogo = {
          rodada : n,
          hora : hora[i],
          mandante : mandantes[i],
          visistante : visitantes[i],
          placar : placar[i]
        }

        jogos.push(jogo);
      }
    });

    return jogos;
  }
}

module.exports = new Parser();
