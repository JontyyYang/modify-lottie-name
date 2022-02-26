const chalk = require('chalk');
const fs = require('fs');

const validate = (Dir, Name) => {
  if (!Dir) {
    return 'lottie 原名是必填的';
  }
  if (!Name) {
    return 'lottie 目标名是必填的';
  }

  return '';
};
const modify = data => {
  console.error(chalk.green('有问题找「杨金达」'));

  const {Dir, Name} = data;

  const validateRes = validate(Dir, Name);
  if (validateRes) {
    console.error(chalk.red(validateRes));
    return;
  }

  const isFileExists = fs.existsSync(data.Dir);
  if (!isFileExists) {
    console.error(chalk.red('请确认文件是否存在，并输入json文件的全名哦'));
    return;
  }

  const jsonData = JSON.parse(fs.readFileSync(data.Dir, 'utf-8'));

  const {assets} = jsonData;

  assets.forEach(item => {
    const name = item.p.replace(/.+_/g, `${Name}_`);
    item.u = '';
    fs.renameSync(`./images/${item.p}`, `require('./images/${name}')`);
    item.p = name;
  });

  const finalStr = 'export default' + JSON.stringify(jsonData, null, 4);
  fs.writeFileSync(Dir, finalStr);
  fs.renameSync(Dir, `./${Name}.ts`);
  console.error(chalk.red('修改成功'));
};

module.exports = modify;
