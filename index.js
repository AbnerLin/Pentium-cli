#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .command('deploy', 'Deploy Router or FAAS-API')
  .parse(process.argv);
