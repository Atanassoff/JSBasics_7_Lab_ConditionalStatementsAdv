function tradeCommissions(town, volume) {
    let result = -1;
    switch (town) {
        case "Sofia":
            if (volume >= 0 && volume <= 500) {
                result = volume * 0.05;
            } else if (volume > 500 && volume <= 1000) {
                result = volume * 0.07;
            } else if (volume > 1000 && volume <= 10000) {
                result = volume * 0.08;
            } else if (volume > 10000) {
                result = volume * 0.12;
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (volume >= 0 && volume <= 500) {
                result = volume * 0.055;
            } else if (volume > 500 && volume <= 1000) {
                result = volume * 0.08;
            } else if (volume > 1000 && volume <= 10000) {
                result = volume * 0.12;
            } else if (volume > 10000) {
                result = volume * 0.145;
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (volume >= 0 && volume <= 500) {
                result = volume * 0.045;
            } else if (volume > 500 && volume <= 1000) {
                result = volume * 0.075;
            } else if (volume > 1000 && volume <= 10000) {
                result = volume * 0.10;
            } else if (volume > 10000) {
                result = volume * 0.13;
            } else {
                console.log("error");
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

tradeCommissions("Sofia", 1500)
//120.00 
tradeCommissions("Plovdiv", 499.99)
//27.50
tradeCommissions("Varna", 3874.50)
//387.45
tradeCommissions("Kaspichan", -50)
//error
