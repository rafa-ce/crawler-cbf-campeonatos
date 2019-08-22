'use strict'

function todasAsRodadas(elem) {
  return elem('.aside-rodadas').find('.swiper-slide');
}

function numeroRodada(elem) {
  return elem.find('.aside-header').find('h3.text-center').text().split(' ')[1];
}

function todosOsJogos(elem) {
  return elem.find('.aside-content').find('li');
}

function times(elem) {
  return {
    casa: elem.find('.clearfix').find('.time.pull-left').find('img').attr('title'),
    fora: elem.find('.clearfix').find('.time.pull-right').find('img').attr('title')
  }
}

function gols(elem) {
  let gols = elem.find('.clearfix').find('.partida-horario.center-block').find('.bg-blue.color-white.label-2').text().split(' x ');

  return {
    casa : parseInt(gols[0]),
    fora: parseInt(gols[1])
  }
}

function detalhesJogo(elem, rodada, ano) {
  let detalhes = elem.find('.partida-desc.text-1.color-lightgray.block.uppercase.text-center').text().trim().split('\n').map(function(i) { return i.trim() });

  let infoData = detalhes[0].split(' ');
  let infoLocal = detalhes[3].includes('alteraç') ? detalhes[6].split(' - ') : detalhes[3].split(' - ');

  return {
    ano : parseInt(ano),
    rodada : parseInt(rodada),
    diaDaSemana : infoData[0].replace(',', ''),
    data : infoData[1],
    hora : infoData[2],
    jogo : parseInt(detalhes[1].split(' ')[3]),
    times : times(elem), 
    gols : gols(elem),
    local : {
      estadio: infoLocal[0],
      cidade: infoLocal[1],
      estado: infoLocal[2]
    }
  };
}

function Parse() {};
Parse.prototype.todasAsRodadas = todasAsRodadas;
Parse.prototype.numeroRodada = numeroRodada;
Parse.prototype.todosOsJogos = todosOsJogos;
Parse.prototype.detalhesJogo = detalhesJogo;
module.exports = Parse;