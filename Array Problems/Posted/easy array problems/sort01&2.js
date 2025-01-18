// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

//Time Complexity - O(n)
//space Complexity - O(1)
const arr = [1,2,0,1,2,0,0,2,1]
function sortthree(){
   let low = 0
   let mid = 0
   let high = arr.length-1
   while(mid <= high){
    if ( arr[mid] === 0){
    //    [arr[low],arr[mid]] = [arr[mid],arr[low]]
    arr[mid] = arr[mid] + arr[low]
    arr[low] = arr[mid] - arr[low]
    arr[mid] = arr[mid] - arr[low]
       low++
       mid++
    }else if( arr[mid] === 2){
    //    [arr[high],arr[mid]] = [arr[mid],arr[high]]
          arr[mid] = arr[mid] + arr[high]
          arr[high] = arr[mid] - arr[high]
          arr[mid] = arr[mid] - arr[high]
         high--
    }
    else{
       mid++
    }
    
   }
   return arr
}
console.log(sortthree())



// function sortthree(){
//     arr.sort((a,b) => a-b) // using sort function, Time complexity O(nlogn)
//     return arr  
// }
// console.log(sortthree())


// Time Complexity O(n)
// function sortthree(){
    
//     let result =[]

//     let oneCount = 0
//     let zeroCount = 0
//     let twoCount = 0

//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === 0){
//             zeroCount++
//         }
//         if(arr[i] === 1){
//             oneCount++
//         }
//         if(arr[i]=== 2){
//             twoCount++
//         }
//     }

//     for(let i =0; i < zeroCount; i++){
//        result.push(0)
//     }
//     for(let i = 0; i < oneCount; i++){
//         result.push(1)
//     }
//     for(let i = 0; i < twoCount; i++ ){
//         result.push(2)
//     }
//     return result
// }
// console.log(sortthree())