/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  input = String(str)
  parenthesis = []
  
  for (x of input) {
    let checker = parenthesis.length - 1
    
    if (x == '(' || x == '{' || x == '[') {
      parenthesis.push(x)
      continue
    }

    if (x == ')') {
      if (parenthesis[checker] == '(') {
        parenthesis.pop()
        continue
      }
      return false

    }

    if (x == '}') {
      if (parenthesis[checker] == '{') {
        parenthesis.pop()
        continue
      }
      return false
    }

    if (x == ']') {
      if (parenthesis[checker] == '[') {
        parenthesis.pop()
        continue
      }
      return false
    }
  }
  if (parenthesis.length !== 0){
    return false
  }
  return true;
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

