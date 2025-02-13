//Check if two arrays are equal. 


const arr1 = [12,23,4,5,6,7]
const arr2 = [12,23,4,5,6,7]

function equalArrays(){
    
    if(arr1.length !== arr2.length){
        return ("arrays are not equal")
    }

    arr1.sort((a,b)=> a - b)
    arr2.sort((a,b)=> a -b)

    for(let i =0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return ("arrays are not equal")
        }
    }
    return("Arrays are equal")
}
console.log(equalArrays())