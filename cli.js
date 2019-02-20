#!/usr/bin/env node
const clone = require('git-clone');
const sys = require('child_process');
const exec = sys.exec;

const [, , ...args] = process.argv;

async function sh(cmd) {
  return new Promise(function(resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  try {
    const name = args[0] ? args[0] : 'ts-node-startertest';
    const destination = `${process.cwd()}/${name}`;

    clone('https://github.com/LucHighwalker/ts-node-starter', destination);
    const _ = await sh(`cd ${destination} && git remote remove origin`);
    console.log(
      `Cloned starter pack to: ${destination}\n\nNext steps:\n  $ cd ${name}\n  $ npm install\n  $ tsc --watch`
    );
  } catch (error) {
    console.error(error);
  }
}

main();
