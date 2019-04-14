'use strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    // Length of the inputs array.
    var length = nums.length;

    // Loop through the inputs array.
    for (var index = 0; index < length; index++) {
        // Get the current input number.
        var num = nums[index];
        // Get the index of another same number, start the search one step after the current number.
        var anotherNumIndex = nums.indexOf(num, index + 1);

        // If the index is found, calculate the difference.
        if (anotherNumIndex > 0) {
            // Calculate the difference.
            var diff = Math.abs(anotherNumIndex - index);

            // If the absolute difference is at most 'k', return true else return false.
            if (diff <= k) {
                return true;
            }
        }
    }

    // Return false, if operation fails.
    return false;

};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));