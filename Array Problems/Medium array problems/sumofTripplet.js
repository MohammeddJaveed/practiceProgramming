// Find all triplets that sum to a given value



const target = 10
let result =[]

const nums = [1,2,3,4,5,6,7]
function sumofTripplet(){
    for( let i =0; i < nums.length ; i++){
        for(let j = i+1; j< nums.length; j++){
            for(let k =j+1; k<nums.length;k++){
                if(nums[i] + nums[j] + nums[k] === target){
                    result.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
return result
    
}
console.log(sumofTripplet())