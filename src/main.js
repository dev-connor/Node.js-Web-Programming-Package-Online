// @ts-check

console.log(process.argv)

const { program } = require('commander')

program.version('0.0.1')

program
  .command('List-bugs')
  .description('List issues with bug label')
  .action(() => {
    console.log('List bugs!');
  })
  
program.parse()


// program
//   .command('start <service>', 'start named service')
//   .command('stop [service]', 'stop named service, or all if no name supplied');

// Command prepared separately.
// Returns `this` for adding more commands.
// program
//   .addCommand(build.makeBuildCommand());