function personalTitles(age, gend) {
    switch (gend) {
        case "m": {
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }

            break;
        }
        case "f": {
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
            break;
        }
    }
}
personalTitles(14, "f")