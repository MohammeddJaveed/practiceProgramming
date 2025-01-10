//Reverse of a string

//Time and space complexity
    //Time complexity = O(n)
    //SPace complexity = O(n)
let text="COMPUTERS"
function reverseString(){
    let Rev= text.split("").reverse().join("")
    return Rev
}
console.log(reverseString())