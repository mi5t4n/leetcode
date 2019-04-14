/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  var moves;

  var min = Math.min.apply(null, nums);
  console.log(`min = ${min}`);

  var sum = nums.reduce(function(total, num) {
    return total + num;
  });

  moves = sum - min * nums.length;

  return moves;
};

function minMoves2(nums) {
  var min = 0;
  var sum = 0;
  var moves;

  var length = nums.length;
  for (var i = 0; i < length; i++) {
    sum += nums[i];
    if (nums[i] < min) min = nums[i];
  }

  moves = sum - min * nums.length;
  return moves;
}

nums = [1, 2, 3];

console.log(minMoves(nums));
