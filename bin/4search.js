#!/usr/bin/env node

var argv = require('optimist').argv;
var board = argv.board;
var keyword = argv._.shift();

var search = require('../');

if (!board) {
	console.log("Missing --board argument");
	return;
}

if (!keyword) {
	console.log("Missing keyword");
	return;
}

var regex = new RegExp('('+keyword+')', 'ig');

search(board, regex, function(err, res){
	if (err) return console.log(err);
	res.forEach(printResults);
});

function printResults(thread) {
	console.log('\n \033[36m=> %s\033[0m', thread.url);
	var lines = thread.com.split('\n');
	lines.forEach(function(line){
		line = line.replace(regex, '\033[37;43m$1\033[0;90m');
		console.log('  \033[90m%s\033[0m', line);
	});
}