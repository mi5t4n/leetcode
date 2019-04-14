'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    // Number of inputs.
    var length = nums.length;
    // Stores the count of the number.
    var count = {};
    // Stores the majority element.
    var majorityElement;
    // Initialize the length of the majority element.
    var majorityElementCount = 0;

    // Loop throught the inputs.
    for (var index = 0; index < length; index++) {
        // Get the number.
        var key = nums[index];

        // If the number is not in the dictionary.
        // Then set the initial value to zero.
        // Else increment the value by 1.
        if (!(key in count)) {
            count[key] = 0;
        }
        // Increment the value by 1.
        count[key] += 1;

        // If the count of the majority element is less than the current count
        // Then update the majority element and count of majority element.
        if (majorityElementCount < count[key]) {
            majorityElement = key;
            majorityElementCount = count[key];
        }
    }

    // Return the majority element.
    return majorityElement;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));