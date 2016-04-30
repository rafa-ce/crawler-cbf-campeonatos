'use strict';

let http    = require('http'),
    Promise = require('promise');

module.exports.get = function (url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(response) {
        var data = '';

        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function(){
            resolve(data);
        });

        response.on('error', function() {
          reject(err)
        });
    })
  })
}
