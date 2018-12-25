#!/usr/bin/env node

const program = require('commander');

let ip = '192.168.10.10';

// function address(_ip) {
//   console.log('ff', _ip)
//   if (!_ip) {
//     process.exit(1);
//   }
//   return _ip;
// }

program
  .version('1.0.0')
  .option('-A, --address [ip]', 'Specify ip for deployment.')
  .option('-R --router')
  .parse(process.argv);

console.log(program.address);
console.log(program.router);