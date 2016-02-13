var path = require('path');
var fs = require('fs');

module.exports = function () {
  return fs.readFileSync(path.resolve('image.txt'), 'utf-8');
}
