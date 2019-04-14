/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // Store the already numbers processed/seen.
    var numbersAlreadySeen = [];
    // Number of the nums.
    var length = nums.length;

    // Loop through each nubmer and process.
    for(var index = 0; index < length; index++){
        // If the numbers is already process, skip it.
        if (numbersAlreadySeen.indexOf(nums[index]) >= 0) {
            continue;
        }

        // Find the another pair.
        var anotherPair = target - nums[index];
        // Find the index of another pair.
        var anotherPairIndex = nums.indexOf(anotherPair, index+1);
        
        // If another pair is found, return the index.
        // Else store the numbers to already seen.
        if ( anotherPairIndex >= 0) {
            return [index, anotherPairIndex];
        } else {
            numbersAlreadySeen.push[nums[index]];
        }
     }
};

var nums = [3,2,4];
var target = 6;
console.log(twoSum(nums, target));
