function oddOccurrences(input) {
    let wordsArr = input.split(' ');
    
    let wordObj = {};

    for (word of wordsArr) {
        let wordInLC = word.toLowerCase();

        if (wordInLC in wordObj) {
            wordObj[wordInLC]++;
        } else {
            wordObj[wordInLC] = 1;
        }
    }

    let entries = Object.entries(wordObj);

    let selectedWords = '';

    for (let [keyWord, value] of entries) {
        if (value % 2 == 1) {
            selectedWords += keyWord + ' ';
        }
    }
    console.log(selectedWords);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');