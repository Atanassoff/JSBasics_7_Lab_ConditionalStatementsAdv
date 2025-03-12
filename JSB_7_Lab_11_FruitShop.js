function fruitShop(fruit, day, qty) {
    let result = -1;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    result = 2.5 * qty;
                    break;
                case "apple":
                    result = 1.2 * qty;
                    break;
                case "orange":
                    result = 0.85 * qty;
                    break;
                case "grapefruit":
                    result = 1.45 * qty;
                    break;
                case "kiwi":
                    result = 2.7 * qty;
                    break;
                case "pineapple":
                    result = 5.5 * qty;
                    break;
                case "grapes":
                    result = 3.85 * qty;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    result = 2.7 * qty;
                    break;
                case "apple":
                    result = 1.25 * qty;
                    break;
                case "orange":
                    result = 0.9 * qty;
                    break;
                case "grapefruit":
                    result = 1.6 * qty;
                    break;
                case "kiwi":
                    result = 3 * qty;
                    break;
                case "pineapple":
                    result = 5.6 * qty;
                    break;
                case "grapes":
                    result = 4.2 * qty;
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");
            break;
    }
    if(result >= 0){
    console.log(result.toFixed(2));
    }
}
fruitShop("apple", "Tuesday", 2)
fruitShop("tomato", "Monday", 0.5)
fruitShop("kiwi", "Tuesday", 2)