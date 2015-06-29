exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var newNum = num.toString(2)
    console.log("string: ", newNum);
    var len = newNum.length
    var newNum = Number(newNum.charAt())
    console.log("number: ", newNum);
    var retNum = (newNum << bit - 1)
    console.log("retNum: ", retNum)
    return newNum

  },

  base10: function(str) {
    return parseInt(str, 2)
  },

  convertToBinary: function(num) {
    var newNum = Number(num).toString(2)
    console.log(newNum.length);
    console.log(newNum);
    if (newNum.length < 8) {
      newNum = "0".concat(newNum)
    }
    console.log(newNum);
    return newNum
    },


  multiply: function(a, b) {
    ////got this from github repo with answers///
    a = adjust(a);
    b = adjust(b);

    var result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;

    function adjust(num) {
      var exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return { adjusted: num * multiplier, multiplier: multiplier };
      }

      return { adjusted: num, multiplier: 1 };
    }
  }
};
