function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const pwd = require('./pwd.js');
    pwd(done);
  } else if (cmd === 'ls') {
    const ls = require('./ls.js');
    ls(done);
  } else if (cmd.split(' ')[0] === 'cat') {
    const cat = require('./cat.js');
    const fileName = cmd.split(' ')[1];
    cat(fileName, done);
  } else if (cmd.split(' ')[0] === 'curl') {
    const curl = require('./curl.js');
    const webAddress = cmd.split(' ')[1];
    curl(webAddress, done);
  } else {
    const youTyped = `You typed: ${cmd}`;
    done(youTyped);
  }
});
