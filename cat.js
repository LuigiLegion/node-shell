const fs = require('fs');

module.exports = function(fileName, done) {
  fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  });
};
