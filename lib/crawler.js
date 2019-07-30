'use strict';

const http    = require('https');
const Promise = require('promise');
const cheerio = require('cheerio');
const url     = "https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/";

module.exports.get = function (ano) {
  return new Promise(function(resolve, reject) {
    http.get(url + ano, function(response) {
      let data = '';

      response.on('data', function(chunk) {
          data += chunk;
      })

      response.on('end', function(){
          resolve({ano: ano, data: cheerio.load(data)});
      })

      response.on('error', function() {
        reject(err)
      })
    })
  })
}
