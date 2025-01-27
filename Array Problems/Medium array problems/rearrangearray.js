//Rearrange an array with alternating positive and negative numbers. 


const arr = [1, 2, 3, -4, -1, 4]
 function rearrange(){
    let positive = []
    let negative = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negative.push(arr[i])
        }else{
         positive.push(arr[i])
        }
    }


    return arr
 }
 console.log(rearrange())