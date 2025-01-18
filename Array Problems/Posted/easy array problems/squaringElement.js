// Create a new array by squaring each element of the input array

// Time Complexity - O(n)
// Space Complexity - O(n)

const arr =[1,2,3,4,5]

function squraring(){
 return arr.map(num => num*num)
}

console.log(squraring())