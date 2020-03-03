/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var numsMap = {}
    nums.forEach(function(num, index){
        numsMap[num] = index;
    });

    var result = [];
    try {
        nums.some(function(num, index){
            var nextPair = target - num;
            var nextPairIndex = numsMap[nextPair];

            if (undefined !== nextPairIndex && index !== nextPairIndex ) {
                result.push(index);
                result.push(nextPairIndex);
                throw BreakException;
            }
        });
    } catch(e){}

    return result;
};

var nums = [3,2,4];
var target = 6;
console.log(twoSum(nums, target));
