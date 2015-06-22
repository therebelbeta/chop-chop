#! /usr/bin/env node
require('shelljs/global');

var inquirer = require('inquirer');
var rc       = require('rc');
var colors   = require('colors');

var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
var heavyCheckMark = '\u2714'
var configuration = rc('chop');

if (!configuration.repository) {
  console.log('No repository defined'.red);
  return;
}

if (configuration.update) {
  updateCache();
  return;
}

if (!configuration.folders.prototypes) {
  console.log('No prototype folder defined'.red);
  return;
}

function updateCache() {
  console.log(('Cache updated ' + heavyCheckMark).green);
}
