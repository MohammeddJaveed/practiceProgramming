//Move zeros to right without affecting the order

//Time and space complexity
    //Time complexity = O(n)
    //SPace complexity = O(n)
const arr = [1, 2, 3, 0, 10, 22, 0, 1, 0];

function moveZeros() {
   let result =[];
   let zeroCount=0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]===0){
        zeroCount++
    }else{
        result.push(arr[i])
    }
   }
   while(zeroCount>0){
    result.push(0);
    zeroCount--
   }
   return result
}

console.log(moveZeros());
