const lineReader = require('line-reader');
let quote, author;

lineReader.eachLine('data/lol_quotes.txt', function(line){
    let lineLength = line.length;
    for(let i = lineLength-1; i>=0; i--){
        if(line[i] === "'"){
            quote = line.slice(1, i);
            author = line.slice(i+1, lineLength)
            break;
        }
    }
    author = author.trim();
    console.log("{\n");
    console.log('"quoteText": "' + quote + '",\n');
    console.log('"quoteAuthor": "' + author + '"\n');
    console.log("},\n");
});