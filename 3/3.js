import fs from 'fs'

let data
let instructions = []

const input = fs.readFile('3/input.txt', (err, input) => {
    data = input.toString()

    let matches = [...data.matchAll(/mul\((\d*),(\d*)\)/g)]
    let couples = matches.map(match => [match[1],match[2]])
    // console.log(couples)

    let result = couples.reduce((sum, couple) => {
        // console.log(couple[0]*couple[1])
        sum += couple[0]*couple[1]
        return sum
    }, 0)
    console.log(result)
})