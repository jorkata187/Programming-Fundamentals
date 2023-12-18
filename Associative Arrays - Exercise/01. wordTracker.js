function wordTracker(arr) {
    let searchWords = arr.shift().split(' ');
    let accurrences = {};

    for (let word of searchWords) {
        accurrences[word] = 0;
    }

    for (let word of arr) {
        if (word in accurrences) {
            accurrences[word]++;
        }
    }

    let entries = Object.entries(accurrences).sort((a, b) => b[1] - a[1]);

    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}

wordTracker([
    'this the',
    'those',
    'this',
    'the',
    'the',
    'in'
]);