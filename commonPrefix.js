// Find the longest common prefix among a group of strings.
const arr=["Cluster","Club","clu"];
result=""
function commonPrefix(){
    if(arr.length===0){
        return("array is empty")
    }
    if(arr.length===1){
        return(arr[0])
    }
    arr.sort();
    let first = arr[0];
    let last= arr[arr.length-1]
    for(let i=0;i<=first.length;i++){
        if(first[i]===last[i]){
           result += first[i]  
        }else{
            break
        }
    }
    if (result === "") {
        result = "no matching prefix";
    }
    console.log(result)
}
commonPrefix()