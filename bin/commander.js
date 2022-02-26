const {Command} = require('commander');
const modify = require('./modify');
const program = new Command();
const {version} = require('../package.json');

const registerCommander = () => {
  program.version(version, '-v, --version');

  program
    .option('-dir <dir-name>')
    .option('-name <lottie-name>')
    .description('修改 lottie 名字')
    .action((name, command) => {
      modify(name);
    });

  program.parse();
};

module.exports = registerCommander;
