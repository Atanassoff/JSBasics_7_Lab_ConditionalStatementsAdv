function evenAndOddSubtraction(arr){
    let evenSum = 0;
    let oddSum = 0;
    for(let num of arr){
        if(num % 2 === 0){evenSum += num;}
        else{oddSum += num;}
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}

evenAndOddSubtraction([1,2,3,4,5,6]) 
//3 
evenAndOddSubtraction([3,5,7,9]) 
//-24
evenAndOddSubtraction([2,4,6,8,10]) 
//30