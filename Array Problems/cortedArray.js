//Check if an array is sorted.

//Time complexity O(n)
// space complexity O(1)

const arr = [1,2,4,5,6,7]
function checkSorted(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return("array is not sorted")
        }
    }
    return "array is sorted"
}
console.log(checkSorted())