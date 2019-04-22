const request = require('request');

module.exports = function(webAddress, done) {
  request(webAddress, { json: true }, (err, res, body) => {
    if (err) {
      throw err;
    } else {
      done(body.explanation);
    }
  });
};
