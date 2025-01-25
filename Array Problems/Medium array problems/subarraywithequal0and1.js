//Find the longest subarray with equal 0s and 1s

//Time complexity - O(n)
//Space Complexity - O(n)

const arr = [0,1,1,0,1,1]

function longestSubarrayWithEqual(){
    let sum = 0;
    let maxLength = 0;

    const map = new Map();
    map.set(0,-1);

    for(let i =0; i < arr.length; i++){
        if(arr[i]===0){
            arr[i] = -1
        }

    sum += arr[i]

    if(map.has(sum) ){
        maxLength = Math.max(maxLength, i - map.get(sum))
    }else{
        map.set(sum , i)
    }
    }
    return maxLength
}
console.log(longestSubarrayWithEqual())