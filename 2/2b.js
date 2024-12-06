import fs from 'fs'

let data
let reports = []

const input = fs.readFile('2/2-sample.txt', (err, input) => {
    data = input.toString();
    // console.log(data)
    reports = data.split(/\n/) // split by lines

    reports = reports.map(report => {
        return report.split(/\s/) // split by spaces
    })

    const isSafe = (report, row) => {
        console.log(`working on row ${row+1}`)
        let dampened = false
        let currentValue
        let previousValue
        let direction = null
        let previousDirection = null

        // console.log(report)
        if (report == '') { // is the row empty?
            return false
        }

        for (let i = 1; i < report.length; i++) { // iterate over every level in a report
            // console.log(`working on character ${i}`)

            currentValue = report[i]
            previousValue = report[i - 1]
            let withinRange = true
            let constantDirection = true

            // determine step size
            if (Math.abs(currentValue - previousValue) > 3 || Math.abs(currentValue - previousValue) < 1) {
                // console.log('step NOT within range')
                withinRange = false
            }

            //determine direction
            if (report[i] - report[i - 1] > 0) {
                direction = 'up'
            }
            else {
                direction = 'down'
            }

            //determine if the direction is constant
            if (previousDirection != null) {
                if (direction !== previousDirection) {
                    constantDirection = false
                }
            }

            if (!withinRange || !constantDirection) {
                if (dampened) {
                    console.log(`Report ${row+1} is NOT safe!`)
                    if (!withinRange) {
                        console.log(`value ${report[i]} was out of range`)
                    }
                    if (!constantDirection) {
                        console.log(`value ${report[i]} was in wrong direction`)
                    }                    return false;
                } else {
                    console.log(`Report ${report} would be unsafe, but we dampen!`)
                    if (!withinRange) {
                        console.log(`value ${report[i]} was out of range`)
                    }
                    if (!constantDirection) {
                        console.log(`value ${report[i]} was in wrong direction`)
                    }
                    //remove dampened value from row: report[i]
                    report.splice(i, 1);
                    //restart row check
                    i = 0
                }
                dampened = true
            }
            previousDirection = direction // remember things
        }
        return true
    }

    const sum = reports.reduce((sum, report, row) => {
        if (isSafe(report, row)) {
            sum++
        }
        return sum
    }, 0)

    console.log(sum)
})