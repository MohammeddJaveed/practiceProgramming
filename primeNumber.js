let numbers=[10,20,3,4,5];
let result=[]
function primeNumbers(){
for(let i=0;i<numbers.length;i++){
    let n=numbers[i]
    if(n<=1){
        continue
    }

    let isprime=true
    for(j=2;j<n;j++){
        if(n%j===0){
            isprime=false
            break;
        }
    }
    if(isprime){
        result.push(n)
    }
}
return result
}
console.log(primeNumbers())