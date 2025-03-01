function dayOfWeek(n){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 
    if(n >= 1 && n <= 7){
        console.log(days[n - 1]);
    }
    else{
        console.log("Invalid day!");
    }
}

dayOfWeek(3) //Wednesday
dayOfWeek(6) //Saturday
dayOfWeek(11) //Invalid day!