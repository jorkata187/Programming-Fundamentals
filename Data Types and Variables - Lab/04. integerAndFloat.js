function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    // let sumAsString = String(sum);

    // let isFloat = false;

    // for (let i = 0; i < sumAsString.length; i++) {
    //     if (sumAsString[i] == '.') {
    //         isFloat = true;
    //     }
    // }
    let isFloat = sum % 1 != 0;
    
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerAndFloat(9, 100, 1.1)