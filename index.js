var chan = require('4chanjs');
var entities = require('entities');
var strip = require('strip');

module.exports = function(boardId, regex, cb) {
	var board = chan.board(boardId);

	board.catalog(function(err, pages){
		if (err) return cb(err);
		var allThreads = pages.map(function(p){
			return p.threads;
		});
		var flattened = [].concat.apply([], allThreads);
		flattened = flattened.filter(function(t){
			return !!t.com;
		});
		flattened.forEach(function(t){
			t.url = "https://boards.4chan.org/"+boardId+"/res/"+t.no;
			t.com = t.com.replace(/(<br>)/gm, "\n");
			t.com = entities.decode(strip(t.com), 2);
		});
		var matchingThreads = flattened.filter(function(thread){
			return regex.test(thread.com);
		});
		cb(null, matchingThreads);
	});
};