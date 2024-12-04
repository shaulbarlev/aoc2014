import fs from 'fs'

let [c1, c2] = [[], []]
let data = [];
let pairs = [];

const input = fs.readFile('aoc2024-1_sample.txt', (err, input) => {
    if (err) throw err
    data = input.toString();

    data = data.split(/\n/) // split by lines
    data = data.map(couple => couple.split('   ')) // split again by spaces
    
    console.log(data)

    for (const row in data) {
        c1.push(data[row][0])
        c2.push(data[row][1])
    }
    console.log(c2);
    console.log(c1);

    //sort columns from smallest.
    c1.sort();
    c2.sort();
    console.log(c1);
    console.log(c2);
    

    //make sure columns are the same length
    if (c1.length != c2.length) {
        console.error("Error: Columns are not same length.")
        return;
    };

    //proceed to make pairs
    for (const num in c1) {
        pairs.push([c1[num],c2[num]])
    }

    //count total distances
    const dis = pairs.reduce((totalDistance, pair) => {
        let currentDistance = Math.abs(pair[0]-pair[1])
        console.log(currentDistance);

        return totalDistance += currentDistance
    }, 0)

    console.log(dis)

})

const inputFile = './aoc2024-1_input.txt'
console.log(inputFile);