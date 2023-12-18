function piccolo(arr) {
    let carObj = {};

    for (let car of arr) {
        let [direction, carNumber] = car.split(', ');

        if (direction == 'IN') {
            carObj[carNumber] = carNumber;
        } else {
            delete carObj[carNumber];
        }
    }
    let entries = Object.entries(carObj).sort();

    for (let [car, carNumber] of entries) {
        console.log(car);
    }
    if (entries.length == 0) {
        console.log("Parking Lot is Empty");
    }
}

piccolo(
['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);