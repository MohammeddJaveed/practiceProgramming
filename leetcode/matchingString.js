// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
const words=["mass","as","hero","superhero"]
function stringMatching(){
    let result=[];
    words.sort((a,b)=>a.length-b.length)  // sort accordint to lenght so that substring can be checked correctly
    for(let i = 0; i < words.length; i++){
        for(j = i+1; j < words.length; j++){
            if(words[j].includes(words[i])){
                result.push(words[i]);
                break
            }
        }
    }
    return result

}
console.log(stringMatching())