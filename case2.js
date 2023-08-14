function mostFrequentLowestID(arr) {
    const observations = {};

    for (let i = 0; i < arr.length; i++) {
        const type = arr[i];
        if (observations[type]) {
            observations[type]++;
        } else {
            observations[type] = 1;
        }
    }
    
    let mostFrequentType = null;
    let mostFrequentCount = 0;

    for (const type in observations) {
        if (observations[type] > mostFrequentCount) {
            mostFrequentType = parseInt(type);
            mostFrequentCount = observations[type];
        }
    }
    
    return mostFrequentType;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, arr;

rl.question('Array Size: ', size => {
    n = parseInt(size);

    rl.question('Array Elements: ', elements => {
        arr = elements.split(' ').map(Number);
        rl.close();
        
        const result = mostFrequentLowestID(arr);
        console.log(result);
    });
});
