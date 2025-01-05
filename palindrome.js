let a = ["ana", "aba", "jjj"];
let result = [];

function palindrome() {
  for (let i = 0; i < a.length; i++) {
    let text = a[i];
    let reverse = text.split("").reverse().join("");
    
    if (reverse === text) { 
      result.push(text); 
    }
  }
  return result;
}

console.log(palindrome());
