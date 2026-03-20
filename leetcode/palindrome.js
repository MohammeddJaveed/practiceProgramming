//Palindrome of a number

const x = -121;

function palindrome(x) {
  let original = x;
  if (x < 0) return false;
  let rev = 0;

  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === rev;
}

console.log(palindrome(x));
