// swapping two numbers

let a=5;
let b=10
function swap(){
   //using third variable
//    let temp=a;
//    a=b;
//    b=temp
//    

    //using addition
    // a=a+b;
    // b=a-b;
    // a=a-b

    //without using addition
    a=a^b;
    b=a^b
    a=a^b
    console.log(`a=${a} b=${b}`)
}
swap()