/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    // Initialize the conversion table.
    var conversionTable = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };

    // Number of roman numerals.
    var length = s.length;
    var integerValue = 0;

    for(var index = 0; index < length; ++index) {
        // Get the current roman numeral.
        var currentRomanNumeral = s[index];
        // Get the next roman numeral.
        var nextRomanNumeral = s[index+1];

        // If the value of next roman numeral is greater than current roman numeral value.
        // then subtract the current roman numeral value.
        // Else add the current roman numeral value.
        if ( conversionTable[nextRomanNumeral] > conversionTable[currentRomanNumeral] ) {
            integerValue -= conversionTable[currentRomanNumeral];
        } else {
            integerValue += conversionTable[currentRomanNumeral];
        }
    }

    return integerValue;
    
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
