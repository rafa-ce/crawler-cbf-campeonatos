'use strict'

module.exports.jogo = function (game) {
  return {
    horario : game.find(".full-game-time").text().trim(),
    mandante : game.find(".row.game").find(".game-team-1").text().trim(),
    visitante : game.find(".row.game").find(".game-team-2").text().trim(),
    placar : game.find(".row.game").find(".game-score").text().replace(/^\s+|\s+$/gm,'').replace(/(\r\n|\n|\r)/gm,""),
    transmissao: game.find('.full-game-info').find(".full-game-transmission").text().trim().split(',')
  }
};
