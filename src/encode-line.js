const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split(''),
    counter = 1,
    newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (arr[i] != arr[i + 1] && counter > 1) {
      newStr += counter + arr[i];
      counter = 1;
    } else if (arr[i] != arr[i + 1] && counter == 1) {
      newStr += arr[i];
      counter = 1;
    } else if (arr[0] != arr[1]) {
      newStr += arr[0];
    }
  }
  return newStr;
  // remove line with error and write your code here
}
// console.log(encodeLine('abbcca'));
module.exports = {
  encodeLine
};
