function palindromeIntegers(arr) {
    for (let num of arr) {
        let numStr = String(num);
        let reversedNumStr = numStr.split('').reverse().join('');
        console.log(numStr == reversedNumStr);
    }
}

palindromeIntegers([477, 633, 121])