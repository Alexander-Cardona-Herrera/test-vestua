/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);

total = parseInt(args);
steps = [1, 2];
let possibilities = 0;
'use strict';

const recursion = (sum = 0) => {
    if (sum === total) {
        possibilities++;
    }

    else if (sum < total) {
        for (let i = 0; i < 2; i++) {
            recursion(steps[i] + sum);
        }
    }
}

const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
      result = result()
    }
    return result
  }

const combination = trampoline(recursion)
combination();
console.log(possibilities);
