// Binary search

//Time and space complexity
    //Time complexity = O(logn)
    //SPace complexity = O(1)
const arr=[1,2,3,4,5,6,7,8,9]
let target =4
function binarySearch(){
    let low =0;
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low + high)/2);
    
        if ( target === arr[mid]){
          return mid
        }
        
        if(arr[mid] > target){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    
    return -1;
}
console.log(binarySearch())