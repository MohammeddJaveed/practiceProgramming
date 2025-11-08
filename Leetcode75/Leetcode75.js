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



/*345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

*/

const s = 'axe'

var reverseVowels = function(s){
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
  const arr = Array.from(s)
  let i = 0;
  let j = arr.length-1;

  while(i<j){
    while(i<j && !vowels.has(arr[i])) i++;
     while(i<j && !vowels.has(arr[j])) j--;
     if(i<j){
      const temp = arr[i];
      arr[i] = arr[j]
      arr[j] = temp;
      i++;
      j--
     }

  }
  return arr.join('')
}
console.log(reverseVowels(s))

/* 1431. Kids With the Greatest Number of Candies
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

 

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.  */


const candies = [2,3,5,1,3]
const extraCandies = 3

var kidsWithCandies = function(candies,extraCandies){
  const maxofarr = Math.max(...candies)
  console.log(maxofarr)
  let len = candies.length;
  let res =[]
  for(let i =0; i < len; i++ ){
    if(candies[i] + extraCandies >= maxofarr ){
       res.push(true)
    }else{
      res.push(false)
    }
  }
  return res
}
console.log(kidsWithCandies(candies,extraCandies))


/* 151. Reverse Words in a String
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
*/

const S = "the sky is blue";

var reverseword = function(S){
  return S.trim().split(/\s+/).reverse().join(' ')
}
console.log(reverseword(S))


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


const num = [-1,1,0,-3,3]

var productExceptSelf = function(num){
 let  n = num.length
  let answer = new Array(n).fill(1)

  
  //Left side
  let left = 1;
  for(let i =0; i< n; i++){
    answer[i] = left;
    left = num[i] * left
  }

  // Right
  let right =1;
  for(let i =n-1; i>=0; i--){
    answer[i] = answer[i] * right;
    right = right * num[i]
    if (answer[i] === 0) answer[i] = 0; // for - symbol
  }
  return answer

}
console.log(productExceptSelf(num))