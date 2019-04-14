'use strict';

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // Count the number of words;
    var lengthStrs = strs.length;
    // Initialize the prefix.
    var prefix = '';

    // If no words are found, return empty prefix.
    if ( lengthStrs == 0){
        return prefix;
    }

    // Set the smallest word to be first.
    var smallestWord = strs[0];
    // Calculate the length of smallest word.
    var smallestWordLength = smallestWord.length;

    // Find the smallest word.
    for(var index = 0; index < lengthStrs; index++) {
        // Get the length of the current word.
        var currentWordLength = strs[index].length;

        // If the length of the current word is zero, then there will be no prefix, so return empty perfix.
        if (currentWordLength == 0) {
            return prefix;
        }

        // If the length of the supposed smallest word is greater than the current word,
        // then update the smallest word and length of the smallest word.
        if ( smallestWordLength > currentWordLength) {
            smallestWord = strs[index];
            smallestWordLength = smallestWord.length;
        }
    }

    // Find the longest common prefix.    
    for(var index = 0; index < smallestWordLength; ++index) {
        // Get the character to check for prefix.
        var character = smallestWord.substr(index,1);
        
        // Check whether the prefix is in all the input words.
        // If not return the prefix else add the character to prefix.
        for(var i = 0; i < lengthStrs; i++) {
            if(character != strs[i].substr(index,1)) {
                return prefix;
            }
        }

        // Add the character to prefix.
        prefix += character;
    }

    return prefix;
};

console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(["flower","flow","flight"]))