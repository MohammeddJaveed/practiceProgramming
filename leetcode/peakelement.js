// Finding a peak element using binary search 

// Time Complexity = O(logn)
//  Space Complexity = O(1)

const arr=[12,13,14,2,6,9]
function peakElement(){
    let low= 0;
    let high= arr.length-1
    let mid;
    while(low<high){
        mid=Math.floor((low+high)/2)

        if(arr[mid]<arr[mid+1]){
            low=mid+1
        }else{
            high=mid
        }
    }
    return low
}
console.log(peakElement())