let fact=1
let num
function factorial(num){
for(let i=num;i>=1;i--){
    fact *= i
}
return fact
}

console.log(factorial(5))