const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
let alf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  encrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptStr = [];

    let strArr = string.toUpperCase().match(/[a-z]/ig),
      keyArr = key.toUpperCase().split(''),
      fullStr = string.toUpperCase().split('');

    let k = 0;

    for (let i = 0; i < strArr.length; i++) {

      let sum = alf.indexOf(strArr[i]) + alf.indexOf(keyArr[k]);
      console.log(sum);
      k++;

      if (k > keyArr.length - 1) {
        k = 0;
      }

      if (sum >= alf.length) {
        encryptStr.push(alf[Math.abs(alf.length - sum)]);
      } else {
        encryptStr.push(alf[sum]);
      }

    }
    let conter = 0;
    for (let i = 0; i < fullStr.length; i++) {
      if (alf.includes(fullStr[i])) {
        fullStr[i] = encryptStr[conter];
        conter++;
      }
    }

    if (this.value === true) {
      return fullStr.join('');
    } else if (this.value === false) {
      return fullStr.reverse().join('');
    }

  }

  decrypt(string, key) {
    // throw new NotImplementedError('Not implemented');
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let encryptStr = [];

    let strArr = string.toUpperCase().match(/[a-z]/ig),
      keyArr = key.toUpperCase().split(''),
      fullStr = string.toUpperCase().split('');

    let k = 0;

    for (let i = 0; i < strArr.length; i++) {

      let sum = alf.indexOf(strArr[i]) - alf.indexOf(keyArr[k]);

      k++;

      if (k > keyArr.length - 1) {
        k = 0;
      }

      if (sum < 0) {
        encryptStr.push(alf[Math.abs(alf.length + sum)]);
      } else {
        encryptStr.push(alf[sum]);
      }

    }

    let conter = 0;
    for (let i = 0; i < fullStr.length; i++) {
      if (alf.includes(fullStr[i])) {
        fullStr[i] = encryptStr[conter];
        conter++;
      }
    }

    if (this.value === true) {
      return fullStr.join('');
    } else if (this.value === false) {
      return fullStr.reverse().join('');
    }
  }
}

// let directMachine = new VigenereCipheringMachine();
// let reverseMachine = new VigenereCipheringMachine(false);



module.exports = {
  VigenereCipheringMachine
};
