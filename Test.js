/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     for (var i = 0; i < nums.length - 1; i++) {
         if (nums[i] + nums[i+1] == target) {
             return '[' + i + ',' + i+1 + ']';
     }
}};