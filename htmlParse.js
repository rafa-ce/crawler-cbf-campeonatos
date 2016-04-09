'use strict'

let cheerio = require('cheerio');

class HtmlParse {
  getElements(data){
    var $ = cheerio.load(data);
      console.log("Título:  " + $('title').text());
  }
}

module.exports = new HtmlParse();
