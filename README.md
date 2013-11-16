[![NPM version](https://badge.fury.io/js/4search.png)](http://badge.fury.io/js/4search)

## Information

<table>
<tr> 
<td>Package</td><td>4search</td>
</tr>
<tr>
<td>Description</td>
<td>4chan search CLI tool and utility library</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## CLI Usage

```
sudo npm install 4search -g
4search --board <board id> "search phrase"
```

![Pic searching b](http://i.imgur.com/wMOdobj.png)

## Library

```javascript
var search = require('4search');

var someregex = new Regex('(search-term)', 'ig');
search('b', someregex, function(err, threads){
	
});
```

## LICENSE

(MIT License)

Copyright (c) 2013 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/wearefractal/4search/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

