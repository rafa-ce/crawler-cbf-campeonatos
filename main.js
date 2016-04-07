'use strict';

let Crawler = require('./crawler.js'),
    HtmlParse = require('./htmlParse.js');

if (process.argv.length <= 2)
    process.exit(-1);

let url = process.argv[2]

let crawler = new Crawler(url);
let htmlParse = new HtmlParse();

crawler.getBody(htmlParse.getElements);
