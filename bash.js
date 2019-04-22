process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const pwd = require('./pwd.js');
    pwd();
  } else if (cmd === 'ls') {
    const ls = require('./ls.js');
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    const cat = require('./cat.js');
    const actualFileName = cmd.slice(4);
    cat(actualFileName);
  } else if (cmd.slice(0, 4) === 'curl'){
        const curl = require('./curl.js');
        const webAddy = cmd.slice(5);
        curl(webAddy)
  }
  
  else {
    process.stdout.write(
      'You typed: ' + cmd + ' and that means nothing to me.'
    );
    process.stdout.write('\nprompt > ')
  }
});
