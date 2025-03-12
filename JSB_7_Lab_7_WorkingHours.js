function workingHours(hour, day) {
    let result = "";
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) {
                result = "open";
            } else {
                result = "closed";
            }
            break;
        default:
            result = "closed";
            break;
    }
    console.log(result);
}

workingHours(11, "Monday")
workingHours(19, "Monday")
workingHours(14, "Sunday")
workingHours(15, "day")
