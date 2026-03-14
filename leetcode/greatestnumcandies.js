/*345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

*/

const s = "axe";

var reverseVowels = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const arr = Array.from(s);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (i < j && !vowels.has(arr[i])) i++;
    while (i < j && !vowels.has(arr[j])) j--;
    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  return arr.join("");
};
console.log(reverseVowels(s));
