/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    var reverseNumber = 0;

    while ( x != 0 ) {
        var lastDigit = x % 10;    

        reverseNumber = reverseNumber*10 + lastDigit;
        x = parseInt(x/10);
    }

    if ( reverseNumber < Math.pow(-2, 31) ) {
        return 0;
    }

    if ( reverseNumber > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reverseNumber;

};

console.log(reverse(1534236469));