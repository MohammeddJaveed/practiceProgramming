// Find the smallest positive missing number in an array. 



const nums = [-1,-4,1,3,4,20]

function firstPositiveMisiingNumber(){

    //Time Complexity - O(nlogn)
    //Space Complexity - O(1)

    // nums.sort((a,b) => a-b)
    // for(let i = 0; i< nums.length; i++){
    //     if(nums[i] > 0 && nums[i + 1] - nums[i] != 1  ){
    //         return nums[i] + 1
    //     }
    // }

    // Time Complexity - O(n)
    //space Complexity - O(1)
    let i =0
    while(i < nums.length){                                                                 // 0, 1,2,3,4,5
        if(nums[i] > 0 && nums[i] < nums.length && nums[i] != i+1){                         //[-1,-4,1,3,4,20]
        let temp = nums[nums[i] - 1]
        nums[nums[i] - 1] = nums[i]
        nums[i] = temp

}else{  
    i++
}   
}
for(let i =0; i< nums.length; i++){
    if (nums[i] !== i+1){
        return i+1
       }
}
return nums.length + 1;
}
console.log(firstPositiveMisiingNumber())