import fs from 'fs'

let data
let instructions = []
let enabled = true

const input = fs.readFile('3/input.txt', (err, input) => {
    data = input.toString()
    let sections = data.split(/(do\(\))|(don't\(\))/)
    sections = sections.filter(section => section != null)

    let filtered = []
    for (const section in sections) {
        if (sections[section] === 'do()') enabled = true
        else if (sections[section] === 'don\'t()') enabled = false
        else {
            if (enabled) {
                filtered.push(sections[section])
            }
        }
    }
    filtered = filtered.join()

    let multipliers = [...filtered.matchAll(/mul\((\d*),(\d*)\)/g)]
    let couples = multipliers.map(match => [match[1],match[2]])
    // console.log(couples)

    let result = couples.reduce((sum, couple) => {
        // console.log(couple[0]*couple[1])
        sum += couple[0]*couple[1]
        return sum
    }, 0)
    console.log(result)
})