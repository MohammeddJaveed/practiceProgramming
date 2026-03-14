//1071. Greatest Common Divisor of Strings

/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
 */

const str1 = "ABABABAB",
  str2 = "ABAB";

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let length = gcd(str1.length, str2.length);
  return str1.substring(0, length);
};
console.log(gcdOfStrings(str1, str2));
