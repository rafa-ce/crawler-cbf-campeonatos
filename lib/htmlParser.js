'use strict'

let cheerio = require('cheerio');

class HtmlParser {
  getElements(data){
    var $ = cheerio.load(data);
      console.log("Título:  " + $('title').text());
  }
}

module.exports = new HtmlParser();
