// Find One missing element in an array
//Time Complexity - O(n)
// Space complexity - O(1)


// First calculate the sum of number i,e is n  FORMULA is   ((n*(n+1))/2)
// Fnd the sum of elements given in array
// subtract from sum of array and the sum of total numbers, the difference is the answer

arr = [1,2,3,5,6,7,8,9,10]

function missingElement(){
    let n = arr.length + 1 // +1 becuase we should add missing element also
    let totalSum = (n*(n+1))/2;
    let actualSum = arr.reduce((sum,num)=>sum + num,0);
    return totalSum - actualSum
    
}
console.log(missingElement())