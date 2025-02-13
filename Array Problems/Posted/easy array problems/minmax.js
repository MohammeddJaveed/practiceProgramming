// Find min and max element in an array
//Time Complexity - O(n)
//space Complexity - O(1)

let arr = [1,2,3,4,5,6,7,8,9,0,-1]

function minmax(){
    let min = arr[0];
    let max = arr[0];

    for(let i =0; i <= arr.length; i++){

        if(arr[i] > max){
            max = arr[i]
           
        } 

        if(arr[i] < min){
            min = arr[i]
          
        }
    }
    return {min , max}
   
}
console.log(minmax())   
