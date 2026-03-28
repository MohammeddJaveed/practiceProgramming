// 443. String Compression
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Note: The characters in the array beyond the returned length do not matter and should be ignored.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: 6
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
const chars = ["a", "a", "b", "b", "c", "c", "c"];

var StringCompression = function (chars) {
  let i = 0;
  let res = 0;

  while (i < chars.length) {
    let currentStr = chars[i];
    let count = 0;

    while (i < chars.length && chars[i] === currentStr) {
      i++;
      count++;
    }

    chars[res] = currentStr;
    res++;

    if (count > 1) {
      let countStr = count.toString();
      for (let ch of countStr) {
        chars[res] = ch;
        res++;
      }
    }
  }
  return res;
};
console.log(StringCompression(chars));
