const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split(''),
    arr2 = s2.split(''),
    counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k] && i != k) {
        arr1.splice(i, 1);
        arr2.splice(k, 1);
        i--;
        k--;
        counter++;
      }
    }
  }
  return counter;
  // remove line with error and write your code here
}
// getCommonCharacterCount('aabcc', 'adcaa');

module.exports = {
  getCommonCharacterCount
};
