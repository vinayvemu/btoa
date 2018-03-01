(function () {
  "use strict";

  function btoa(str) {
    var {Buffer} = require('buffer');
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = new Buffer(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());
