// Find two numbers in an array that add up to a target
//Time and space complexity
    //Time complexity = O(n2)
    //SPace complexity = O(n2)
let target=50;
const arr=[20,30,25,25,30]
let result=[]
function targetSum(){
    // Take first elemet from first loop and check adding the element with other using second for loop
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            if(arr[i] + arr[j]===target){
                result.push([arr[i], arr[j]]); 
            }
        }
    }
    console.log(result)
}
targetSum()
