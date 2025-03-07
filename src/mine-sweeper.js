const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // matrix = matrix.map(item => item.map(num => {
  //   if (num != true) {
  //     return Number(num);
  //   } else {
  //     return num;
  //   }
  // }));

  // for (let i = 0; i < matrix.length; i++) {
  //   for (let k = 0; k < matrix[i].length; k++) {
  //     if (matrix[i][k] == true && i != matrix.length - 1) {
  //       matrix[i + 1][k]++;
  //       matrix[i][k + 1]++;
  //       break;
  //     }
  //   }
  // }

  // return matrix;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  minesweeper
};
