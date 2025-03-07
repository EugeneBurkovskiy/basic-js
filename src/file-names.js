const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    for (let k = 0; k < names.length; k++) {
      if (i != k && names[i] === names[k]) {
        newArr.push(names[k]);
      }
    }
  }
  let counter = 0;
  newArr = Array.from(new Set(newArr));
  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(newArr[0])) {
      counter++;
      if (counter > 1) {
        if (/\d/ig.test(names[i])) {
          counter--;
          names[i] = names[i] + `(${counter - 1})`;
        } else {
          names[i] = names[i] + `(${counter - 1})`;
        }
      }
    }
    // throw new NotImplementedError('Not implemented');
  }
  return names;
}
module.exports = {
  renameFiles
};
