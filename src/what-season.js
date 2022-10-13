const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    throw new Error('Unable to determine the time of year!');
  }
  let month = date.getMonth();
  // if (!(/\d+\-\d+\-\d+T\d+\:\d+\:\d+\.\d+z/ig.test(date.toString()))) {
  //   throw new Error('Invalid date!');
  // }
  if (date.getMilliseconds() === 0 || !date.getMilliseconds()) {
    throw new Error('Invalid date!');
  }
  let winter = [11, 0, 1,],
    spring = [2, 3, 4],
    summer = [5, 6, 7],
    autumn = [8, 9, 10];
  if (winter.includes(month)) {
    return 'winter';
  } else if (spring.includes(month)) {
    return 'spring';
  } else if (summer.includes(month)) {
    return 'summer';
  } else if (autumn.includes(month)) {
    return 'autumn';
  }
}
// console.log(getSeason());
// console.log(getSeason(new Date(20192701)));

module.exports = {
  getSeason
};
