// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

const s = "[]";

function validParanthesis() {
  let stack = [];
  if (s.length === 0) return "Input dede bhai";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let prevValue = stack.pop();
      if (prevValue === "(" && char !== ")") return false;
      if (prevValue === "[" && char !== "]") return false;
      if (prevValue === "{" && char !== "}") return false;
      if (prevValue === undefined) return false;
    }
  }
  return stack.length === 0;
}
console.log(validParanthesis());
