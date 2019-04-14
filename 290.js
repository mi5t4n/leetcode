'use strict';

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {

    var patternLength = pattern.length;
    var words = str.split(' ');
    var wordsLength = words.length;

    var dict = {};

    // Return false, if the length doesn't match.
    if (patternLength != wordsLength) return false;

    for (var i = 0; i < patternLength; i++) {
        var patternChar = pattern.substr(i, 1);
        if (!(patternChar in dict) && !(Object.values(dict).indexOf(words[i]) >= 0)) {
            dict[patternChar] = words[i];
        } else if (dict[patternChar] != words[i]) {
            return false;
        }
    }

    console.log(dict);

    return true;

};

var inputs = [{
        'pattern': 'abba',
        'str': 'dog dog cat dog'
    },
    {
        'pattern': 'abba',
        'str': 'dog dog dog dog'
    },
    {
        'pattern': 'abba',
        'str': 'dog cat cat fish'
    }
];

console.log(wordPattern(inputs[1].pattern, inputs[1].str));