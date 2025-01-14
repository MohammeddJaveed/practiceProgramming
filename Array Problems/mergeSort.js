// Merge sort

//Time and space complexity
    //Time complexity = O(nlogn)
    //SPace complexity = O(n)
const arr1=[100,200,300,400]
const arr2=[1,2,3,4,5,7,200,300,900]
function combineArray(){
    let comined= arr1.concat(arr2);
    comined.sort((a, b) => a - b)
    return comined
}
console.log(combineArray())