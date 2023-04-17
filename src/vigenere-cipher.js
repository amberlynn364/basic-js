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

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(phrase, key) {

    if (phrase === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    phrase = phrase.split('');
    key = key.split('');
    let result = [];
    let keyIndex = [];

    for (let i = 0; i < key.length; i++) {
      keyIndex.push(ALPHABET.indexOf(key[i].toUpperCase()));
    }

    while (phrase.length > keyIndex.length) {
      keyIndex = keyIndex.concat(keyIndex);
    }

    keyIndex = keyIndex.slice(0, phrase.length);
    
    let j = 0;
    for (let i = 0; i < phrase.length; i++) {
      let phraseIndex = ALPHABET.indexOf(phrase[i].toUpperCase())
      // console.log(phraseIndex)
      if (phraseIndex === -1) {
        result.push(phrase[i]);
      } else {
        let eachKeyIndex = keyIndex[j];
        j++
        let encryptedIndex = (phraseIndex + eachKeyIndex) % 26;
        result.push(ALPHABET[encryptedIndex]);
      }
    }
    return this.reverse ? result.join('') : result.reverse().join('')
  }
// AEIHQX SX DLLU!

  decrypt(encryptedPhrase, key) {

    if (encryptedPhrase === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    encryptedPhrase = encryptedPhrase.split('');
    key = key.split('');
    let result = [];
    let keyIndex = [];

    for (let i = 0; i < key.length; i++) {
      keyIndex.push(ALPHABET.indexOf(key[i].toUpperCase()));
    }

    while (encryptedPhrase.length > keyIndex.length) {
      keyIndex = keyIndex.concat(keyIndex);
    }

    keyIndex = keyIndex.slice(0, encryptedPhrase.length);

    let j = 0;
    for (let i = 0; i < encryptedPhrase.length; i++) {
      let encryptedPhraseIndex = ALPHABET.indexOf(encryptedPhrase[i].toUpperCase())
      if (encryptedPhraseIndex === -1) {
        result.push(encryptedPhrase[i]);
      } else {
        let eachKeyIndex = keyIndex[j];
        j++
        let encryptedIndex = (encryptedPhraseIndex - eachKeyIndex) <= 0 ? (encryptedPhraseIndex - eachKeyIndex + 26) % 26 : (encryptedPhraseIndex - eachKeyIndex) % 26;
        result.push(ALPHABET[encryptedIndex]);
      }
    }
    return this.reverse ? result.join('') : result.reverse().join('')

  }
// ATTACK AT DAWN!
}
// console.log(33 % 26)
module.exports = {
  VigenereCipheringMachine
};


const directMachine = new VigenereCipheringMachine();
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))