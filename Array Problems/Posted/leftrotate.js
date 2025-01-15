//Rotate an array to the left by one position. 

//Time Complexity - O(n)
//Space Complexity - O(1)


const arr=[10,20,30,40]
let k =2
function leftRotate(){
for(let i =0; i < k; i++){
      let removedElement = arr.shift()
    arr.push(removedElement)
}
return arr
}
console.log(leftRotate())