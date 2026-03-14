// Remove a specific element from an array:

// Time Complexity - O(n)
// Space Complexity - O(n)
const arr = [1,3,4,5,6,7,8,9,0,2]
const elementToBeRemoved = 0

function removeElement(){
    let result =[]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== elementToBeRemoved){
             result.push(arr[i])
        }
    }
    return result
}
console.log(removeElement())