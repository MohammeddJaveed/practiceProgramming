// Rotate an array to the right by k steps

//Time and space complexity
    //Time complexity = O(n)
    //SPace complexity = O(1)
const arr=[1,2,3,4,5,6,7]
const k = 9
function arrayRotation(arr,k){
    k=k%7 // divide number of steps by total number of elements in array
    // we have to loop till the number of rotations
    for(i=0;i<k;i++){
        arr.unshift(arr.pop())
    }
    console.log(arr)
}
arrayRotation(arr,k)