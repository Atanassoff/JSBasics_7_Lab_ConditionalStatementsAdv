function condenseArrayToNumber(arr){
    let newArr = [];
    while(arr.length > 1){
        for(let i = 0; i < arr.length - 1; i++){
            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;
        newArr = [];
    }
    console.log(arr.join(' '));
}

condenseArrayToNumber([2,10,3]) 
//25
condenseArrayToNumber([5,0,4,1,2]) 
//35 
condenseArrayToNumber([1]) 
//1