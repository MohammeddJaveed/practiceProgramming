//1768. Merge Strings Alternately

/* You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r. */

const word1 = "abc"
const word2 = "pqr"
var mergeAlternately = function(word1, word2) {
    let merged ='';
    let maxLength = Math.max(word1.length, word2.length);
    for(let i =0; i< maxLength; i++){
        if(word1[i]) merged += word1[i]
        if(word2[i]) merged += word2[i]
    }
    return merged
}
console.log(mergeAlternately(word1, word2));



//1071. Greatest Common Divisor of Strings

/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
 */

const str1 = "ABABABAB", str2 = "ABAB"

var gcdOfStrings = function(str1,str2){

    if(str1+ str2 !== str2+str1) return ''

    const gcd =(a,b) => (b === 0 ? a : gcd(b, a % b))

    let length = gcd(str1.length, str2.length);
    return str1.substring(0,length)

}
console.log(gcdOfStrings(str1, str2));


//283. Move Zeroes
/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0] */

let nums = [1,10,0,0,0,0 ,13];

var moveZeros = function(nums) {
  let lastZeroIndex =0;
  for(let i =0; i< nums.length; i++){
    if(nums[i]!== 0){
      [nums[lastZeroIndex], nums[i]] = [nums[i], nums[lastZeroIndex]]
      lastZeroIndex++
    }
  }
  return nums
};

console.log(moveZeros(nums));  
