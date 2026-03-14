// 238. Product of Array Except Self
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

const num = [-1, 1, 0, -3, 3];

var productExceptSelf = function (num) {
  let n = num.length;
  let answer = new Array(n).fill(1);

  //Left side
  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left = num[i] * left;
  }

  // Right
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right = right * num[i];
    if (answer[i] === 0) answer[i] = 0; // for - symbol
  }
  return answer;
};
console.log(productExceptSelf(num));
