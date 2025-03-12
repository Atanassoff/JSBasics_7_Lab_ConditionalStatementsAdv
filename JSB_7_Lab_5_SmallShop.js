function smallShop(good, town, qty) {
    let price = 0;
    switch (good) {
        case "coffee":
            if (town === "Sofia") {
                price = qty * 0.5;
            } else if (town === "Plovdiv") {
                price = qty * 0.4;
            } else if (town === "Varna") {
                price = qty * 0.45;
            }
            break;
        case "water":
            if (town === "Sofia") {
                price = qty * 0.8;
            } else if (town === "Plovdiv") {
                price = qty * 0.7;
            } else if (town === "Varna") {
                price = qty * 0.7;
            }
            break;
        case "beer":
            if (town === "Sofia") {
                price = qty * 1.2;
            } else if (town === "Plovdiv") {
                price = qty * 1.15;
            } else if (town === "Varna") {
                price = qty * 1.1;
            }
            break;
        case "sweets":
            if (town === "Sofia") {
                price = qty * 1.45;
            } else if (town === "Plovdiv") {
                price = qty * 1.3;
            } else if (town === "Varna") {
                price = qty * 1.35;
            }
            break;
        case "peanuts":
            if (town === "Sofia") {
                price = qty * 1.6;
            } else if (town === "Plovdiv") {
                price = qty * 1.5;
            } else if (town === "Varna") {
                price = qty * 1.55;
            }
            break;
        default:
            break;
    }
    console.log(price);
    
}
smallShop("sweets", "Sofia", 2.23)

//         coffee water beer sweets peanuts
//Sofia     0.50  0.80  1.20 1.45   1.60
//Plovdiv   0.40  0.70  1.15 1.30   1.50
//Varna     0.45  0.70  1.10 1.35   1.55