'use strict'

let cheerio = require('cheerio');

module.exports = class HtmlParse {
  getElements(data){
    var $ = cheerio.load(data);
      console.log("Título:  " + $('title').text());
  }
}
