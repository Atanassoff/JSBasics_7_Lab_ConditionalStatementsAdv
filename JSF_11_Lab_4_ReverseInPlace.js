function reverseInPlace(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
    }
    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']) 
//e d c b a 
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']) 
//nop klm hig def abc
reverseInPlace(['33', '123', '0', 'dd']) 
//dd 0 123 33