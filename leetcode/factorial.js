// Factorial

//Time and space complexity
    //Time complexity = O(n)
    //SPace complexity = O(1)
let fact=1
let num
function factorial(num){
for(let i=num;i>=1;i--){
    fact *= i
}
return fact
}

console.log(factorial(5))