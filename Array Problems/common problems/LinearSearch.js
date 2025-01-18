//Liner search

// Time complexity = O(n)
// space complexity = O(1)
const arr=[2,9,10,15,20,9,7]
let target=13;
function LinearSearch(){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(LinearSearch())