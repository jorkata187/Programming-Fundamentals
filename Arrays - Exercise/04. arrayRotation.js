function arrayRotation(arr, routationCount) {
    for (let routation = 1; routation <= routationCount; routation++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);