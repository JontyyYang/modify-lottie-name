#! /usr/bin/env node
const clear = require('clear');
const registerCommander = require('./commander');

(function () {
  clear();

  registerCommander();
})();
