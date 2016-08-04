'use strict';

const http    = require('http');
const Promise = require('promise');
const cheerio = require('cheerio');
const url     = "http://www.cbf.com.br/competicoes/brasileiro-serie-a/tabela/";

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
