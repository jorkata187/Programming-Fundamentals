function magicSum(arr, num) {
    let arr2 = arr.slice();
    for (let i = 0; i < arr2.length; i++) {
        let num1 = arr.shift();
        for (let j = 0; j < arr.length; j++) {
        let num2 = arr[j];

        if (num1 + num2 == num) {
            console.log(`${num1} ${num2}`);
        }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23, 4, 4], 8);