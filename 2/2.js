import fs from 'fs'

let data
let reports = []

const input = fs.readFile('2/2-input.txt', (err, input) => {
    data = input.toString();
    // console.log(data)
    reports = data.split(/\n/) // split by lines

    reports = reports.map(report => {
        return report.split(/\s/) // split by spaces
    })
    // console.log(reports)
    // console.log(reports[0])
    
    const isSafe = (report) => {
        let currentValue
        let previousValue
        let direction = null
        let previousDirection = null
        


        // console.log(report)
        if (report == '') { // is the row empty?
            return false
        }

        for (let i = 1; i < report.length; i++) { // iterate over every level in a report
            currentValue = report[i]
            previousValue = report[i - 1]

            // console.log(currentValue)
            // console.log(previousValue)

            // determine step size
            if (Math.abs(currentValue - previousValue) > 3 || Math.abs(currentValue - previousValue) < 1) {
                // console.log('step NOT within range')
                // console.log('not safe')
                return false
            }
            

            //determine direction
            if (report[i] - report[i - 1] > 0) {
                direction = 'up'
            }
            else {
                direction = 'down'
            }

            // console.log(`${i}: ${direction}`)
            // console.log(previousDirection)

            //determine if the direction is constant
            if (previousDirection != null) {
                if (direction !== previousDirection) {
                    // console.log('not safe')
                    return false
                }
            }
            previousDirection = direction // remember things
        }
        return true
    }

    // console.log(reports[0])
    console.log(isSafe(reports[5]))

    reports.forEach(report => isSafe(report))

    const sum = reports.reduce((sum, report) => {
        if (isSafe(report)) {
            sum++
        }
        return sum
    },0)

    console.log(sum)
})