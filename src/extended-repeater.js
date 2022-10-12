const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = { repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|' }) {
  let arr = [],
    newStr = str;
  let strCounter = 0,
    additionCounter = 0;

  if (typeof options.separator == 'undefined') {
    options['separator'] = '+';
  }
  if (typeof options.repeatTimes == 'undefined') {
    options['repeatTimes'] = 1;
  }
  if (typeof options.additionRepeatTimes == 'undefined') {
    options['additionRepeatTimes'] = 1;
  }
  if (typeof options.additionSeparator == 'undefined') {
    options['additionSeparator'] = '|';
  }
  if (typeof options.addition == 'undefined') {
    options.addition = '';
  }

  while (strCounter < options.repeatTimes) {
    while (additionCounter < options.additionRepeatTimes) {
      if (options.additionRepeatTimes - 1 === additionCounter) {
        newStr += options.addition;
      } else {
        newStr += options.addition + options.additionSeparator;
      }
      additionCounter++;
    }
    arr.push(newStr);
    strCounter++;
  }
  if (additionCounter == 0 || strCounter == 0) {
    arr[0] = arr[0] + options.addition;
  }
  return arr.join(`${options.separator}`);
}

const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};

console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }));

module.exports = {
  repeater
};
