// Find the union of two arrays


const nums1 = [1,2,3,4]
const nums2 = [3,4,5,6]

function unionofArrays(){
    // return Array.from(new Set([...nums1,...nums2])) 


    //Time Complexity - O(n1 + n2)  Time for set and for loop
    //Space Complexity - O(n1 + n2) Space for set and result

    const set1 = new Set(nums1)
    let result = []

    for(let i =0; i<nums2.length;i++){
        if(!set1.has(nums2[i])){
           result.push(nums2[i]) 
        }
    }
    result = [...Array.from(set1), ...result];
    return result
}
console.log(unionofArrays())