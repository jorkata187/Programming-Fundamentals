function splitPascalCase(inputString) {
    let words = [];
    let currentWord = inputString[0];

    for (let i = 1; i < inputString.length; i++) {
        let currentChar = inputString[i];

        // Check if the current character is uppercase
        if (currentChar === currentChar.toUpperCase()) {
            words.push(currentWord);
            currentWord = currentChar;
        } else {
            currentWord += currentChar;
        }
    }
    words.push(currentWord);
    console.log(words.join(', '));
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');