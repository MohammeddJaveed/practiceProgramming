// Find the intersection of two arrays. 



const nums1 = [1,2,3,4,4]
const nums2 =[2,4,4]

function intersection(){
    // let result =[]
    // for(let i =0;i < nums1.length; i++){
    //     for(let j = 0; j < nums2.length ; j++){
    //         if(nums1[i] === nums2[j]){
    //             result.push(nums1[i])
    //         }
    //     }
    // }
    // return result

//    return nums1.filter(elements => nums2.includes(elements))


// nums1.sort((a,b )=> a-b )
// nums2.sort((a,b) => a-b)

// let i =0
// let j =0
// let result = []
// while (i < nums1.length && j < nums2.length){
//     if(nums1[i] === nums2[j]){
//         if(result [result.length -1] != nums1[i])
//         result.push(nums1[i])
//         i++
//         j++
//     } else if( nums1[i] > nums2[j]){
//         j++
//     }else{
//         i++
//     }
// }
// return result

//USING HASHMAP

const set1 = new Set(nums1)
let result = []
for(let i =0; i< nums2.length; i++){
    if(set1.has(nums2[i])){
        result.push(nums2[i]);
        set1.delete(nums2[i])
    }
}
return result
}
console.log(intersection())