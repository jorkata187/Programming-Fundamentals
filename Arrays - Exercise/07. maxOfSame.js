function maxOfSame(arr) {
    let counter = 1;
    let mainCounter = 0;
    let mainNum = 0;

    for (let i = 0; i - 1 < arr.length; i++) {
        let num = arr[i];

        if (num == arr[i + 1]) {
            counter++;
        } else {
            counter = 1;
        }
        if (counter > mainCounter) {
            mainCounter = counter;
            mainNum = num;
        }
    }
     let x = ''
    for (i = 0; i < mainCounter; i++) {
        x += mainNum + ' ';
    }

    console.log(x);
}

maxOfSame([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);