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
let test = '9UXKEEt8Aq';
let testOptions = { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' };
function repeater(str, options) {

  let optionRepeat = options.repeatTimes || 1,
   optionSeparator = options.separator || '+',
   optionAdditionRepeatTimes = options.additionRepeatTimes || 1,
   optionAdditionSeparator = options.additionSeparator || '|',
   optionAddition = options.addition;

   result = '';

   if (optionAddition === undefined) {
    optionAddition = '';
   }

   for (let i = 0; i < optionRepeat; i++) {
    result += str;
    
    for (let k = 0; k < optionAdditionRepeatTimes; k++) {
      result += optionAddition;

      if (k !== optionAdditionRepeatTimes - 1) {
        result += optionAdditionSeparator;
      }
    }
    
    if (i !== optionRepeat - 1) {
      result += optionSeparator;
    }
   }
   
   return result;
}

repeater(test, testOptions)
module.exports = {
  repeater
};
