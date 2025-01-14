//Count the number of even and odd elements in an array.

//Time Complexity - O(n)
//Space complexity - O(1)


const arr =[1,2,3,4,5,6,7,8,9,0]

function oddEvenCount(){
    let oddCount = 0;
    let EvenCount = 0;

    for( let i =0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            EvenCount++
        }else{
            oddCount ++
        }
    }
    return{oddCount,EvenCount}
}
console.log(oddEvenCount())