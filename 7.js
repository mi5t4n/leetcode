/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    // Initialze the reverse number to 0.
    var reverseNumber = 0;

    while ( x != 0 ) {
        // Get the last digit of the number.
        var lastDigit = x % 10;    
        // Create the reverse number.
        reverseNumber = reverseNumber*10 + lastDigit;
        // Remove the last digit of the number.
        x = parseInt(x/10);
    }

    // Return 0 if the reverse number is less than -2^31.
    if ( reverseNumber < Math.pow(-2, 31) ) {
        return 0;
    }

    // Return 0 if the reverse number is greater than 2^31+1
    if ( reverseNumber > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    // Return the reverse number.
    return reverseNumber;

};

console.log(reverse(1534236469));