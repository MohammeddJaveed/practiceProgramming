//Fibonacci series

//Time and space complexity
    //Time complexity = O(n)
    //SPace complexity = O(n)
let n=20
let fib=[]
function fibonacci(){
    fib[0]=0
    fib[1]=1
    for(let i=2; i<=n;i++){
        let sum;
        sum= fib[i-1]+fib[i-2];
        fib.push(sum)
    }
    console.log(fib)
}

fibonacci()