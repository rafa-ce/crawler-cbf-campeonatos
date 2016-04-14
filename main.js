'use strict';

let Crawler = require('./lib/crawler'),
    htmlParser = require('./lib/htmlParser');

if (process.argv.length <= 2)
    process.exit(-1);

let url = process.argv[2]

let crawler = new Crawler(url);

crawler.getBody(htmlParser.getElements);
