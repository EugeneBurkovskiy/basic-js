const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let deletedNumbers = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = JSON.parse(JSON.stringify(arr));
  if (newArr[0] == '--double-prev' || newArr[0] == '--discard-prev') {
    newArr.splice(0, 1);
  }
  if (newArr[newArr.length - 1] == '--double-next' || newArr[newArr.length - 1] == '--discard-next') {
    newArr.splice(newArr.length - 1, 1);
  }
  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--double-next':
        newArr[i] = newArr[i + 1];
        break;
      case '--double-prev':
        newArr[i] = newArr[i - 1];
        break;
      case '--discard-prev':
        newArr.splice(i, 1);
        newArr.splice(i - 1, 1);
        i--;
        break;
      case '--discard-next':
        newArr.splice(i, 1);
        newArr.splice(i, 1);
        newArr.splice(i, 1);
        i--;
        break;
    }
  }
  return newArr;
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
