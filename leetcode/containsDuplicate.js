// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.
const nums = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return false;
    }
    seen.add(nums[i]);
  }
  return true;
};
console.log(containsDuplicate(nums));
