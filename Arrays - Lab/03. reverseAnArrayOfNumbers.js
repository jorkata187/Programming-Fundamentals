function reverseAnArrayOfNumbers(n, nums) {
    
    // let result = [];
    // for (let i = 0; i < n; i++) {
    //     result[i] = nums[i]; // result.push(nums[i])
    // }
    let reversed = [];
    for (let i = n - 1; i >= 0; i--) {
        reversed[reversed.length] = result[i]; // reversed.push(result[i]) // reversed.push(nums[i])
    }

    console.log(reversed.join(' '));
    // console.log(nums.slice(0, n).reverse().join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);