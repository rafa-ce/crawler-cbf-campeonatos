'use strict';

let http = require('http');

module.exports = class Crawler {
  constructor(url) {
    this.url = url;
  }

  getBody(callback) {
    http.get(this.url, function(response)
    {
        var data = '';

        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function(){
            callback(data);
        });
    });
  }
}
