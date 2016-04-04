var http = require('http');
var cheerio = require('cheerio');

if (process.argv.length <= 2)
    process.exit(-1);

var url = process.argv[2]

http.get(url, (response) => {
  if (response.statusCode === 200) {
    var body = '';

    response.on('data', (chunk) => {
      body += chunk;
    });

    response.on('end', () => {
      var $ = cheerio.load(body);
      console.log("Título:  " + $('title').text());
    });
  }
  else {
    console.log('Erro - Status code: ' + response.statusCode);
  }
}).on('error', (e) => {
  console.log('Erro: ${e.message}');
});
