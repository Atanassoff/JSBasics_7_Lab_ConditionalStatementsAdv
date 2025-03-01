function sumEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (Number(num) % 2 === 0) {
            sum += Number(num);
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])
//12
sumEvenNumbers(['3', '5', '7', '9'])
//0
sumEvenNumbers(['2', '4', '6', '8', '10'])
//30