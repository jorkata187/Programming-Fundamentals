function makeDictionary(arr) {
    let dictionary = {};

    for (let jsonStr of arr) {
        let data = JSON.parse(jsonStr);

        for (let term in data) {
            dictionary[term] = data[term];
        }
    }
    let sortedDictonary = {};
    Object.keys(dictionary).sort().forEach((term) => {
        sortedDictonary[term] = dictionary[term]
    })
    for (let term in sortedDictonary) {
        let definition = sortedDictonary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

makeDictionary(
    [
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);