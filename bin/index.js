#! /usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const registerCommander = require('./commander');

(function () {
  try {
    clear();

    registerCommander();
  } catch (e) {
    console.error(chalk.green('有问题找「杨金达」'));
  }
})();
