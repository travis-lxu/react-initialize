#!/usr/bin/env node

const { resolve } = require('path');
const program = require('commander');

const res = command => resolve(__dirname, '../commands/', command)
process.env.NODE_PATH = __dirname + '/../node_modules/';

program
  .version(require('../package').version)
  .description('A React-Cli Tool')
  .usage('<command>');

program.command('init')
  .option('-f, --foo', 'enable some foo')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require(res('init'))
  });

program.parse(process.argv);

if(!program.args.length){
  program.help()
}
