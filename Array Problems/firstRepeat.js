//Find the first repeating element in an array. 

// Time Complexity - O(n)
// Space Complexity - O(n)

const arr = [9,1,3,4,5,3,4]
function firstrepeat(){
   let firstRepeat = {}

   for (let i =0; i < arr.length; i++){
    if(firstRepeat[arr[i]]){
        return arr[i]
    }
    firstRepeat[arr[i]] = true;
   }
}
console.log(firstrepeat())