const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let hostName = [],
    firstDomain = [],
    secondDomain = [],
    obj = {};
  if (domains.length === 0) {
    return {};
  }
  for (let i = 0; i < domains.length; i++) {
    let url = domains[i].split('.');
    if (url.length === 3) {
      hostName.push(url[0]);
      firstDomain.push(url[1]);
      secondDomain.push(url[2]);
    } else if (url.length === 2) {
      firstDomain.push(url[0]);
      secondDomain.push(url[1]);
    } else if (url.length === 1) {
      secondDomain.push(url[0]);
    }
  }
  obj[`.${secondDomain[0]}`] = secondDomain.length;
  obj[`.${secondDomain[0] + '.' + firstDomain[0]}`] = firstDomain.length;
  if (hostName.length) {
    hostName.forEach(item => {
      obj[`.${secondDomain[0] + '.' + firstDomain[0] + '.' + item}`] = 1;
    });
  }

  return obj;
  // remove line with error and write your code here
}
// console.log(getDNSStats([]));

module.exports = {
  getDNSStats
};
