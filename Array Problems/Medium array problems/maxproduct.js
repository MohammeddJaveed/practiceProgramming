// Find the maximum product of two elements in an array


const nums = [3,4,5,2]

function maxproduct(){
//   let maximum = Math.max(...nums)
//   console.log(maximum)
//     let secondmax =-Infinity
//     for(let i =0; i < nums.length; i++){
//         if(nums[i] < maximum && nums[i] > secondmax ){
//             secondmax = nums[i]
            
//         }
        
//     }
    
//     return maximum * secondmax
let max=0;
    let secondmax=0;
    for(let i of nums){
        if(i>max){
            secondmax=max;
            max=i;
        }
        else if(i>secondmax){
            secondmax=i;
        }
    }
    let ans=(max-1)*(secondmax-1);
    return ans;
}
console.log(maxproduct())