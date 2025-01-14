//Find second Largest element in an array

//Time Complexity O(n)
//Space Complexity O(1)


let arr = [19,13,1,4,20]

function secondLargest(){
    let max = -Infinity
    let secondMax = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max
            max = arr[i]
        }else if(arr[i] > secondMax && arr[i] !== max ){
            secondMax = arr[i]
        }
    }
  return secondMax
}
console.log(secondLargest())