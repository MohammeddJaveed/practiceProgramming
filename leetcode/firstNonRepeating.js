// Find the first non-repeating element in an array. 

// Time Complexity - O(n)
// Space Complexity - O(n)

const arr = [2, 2,2, 2, 3, 4, 4, 5];

function firstNonRepeatingElement() {
   let storeElements = {}

   for( let i =0; i < arr.length; i++){
    storeElements[arr[i]] = (storeElements[arr[i]] || 0) + 1
   }

   for(let i = 0; i < arr.length; i++){
    if(storeElements[arr[i]] === 1){
        return arr[i]
    }
   }
   return null
}

console.log(firstNonRepeatingElement()); 
