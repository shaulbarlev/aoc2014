const input = fs.readFile('4/sample.txt', (err, input) => {
    data = input.toString()

    let inputArray = data.split(/\n/)
    for (const row in inputArray) {
        inputArray[row] = inputArray[row].split('')
    }
    console.log(inputArray)

    const horizontalCheck = (inputArray) => {
        let count = 0
        for (const row in inputArray) {
            // console.log(inputArray[row].join(''))
            if (inputArray[row].join('').match(/(XMAS)/)) {
                count++
            }
            if (inputArray[row].join('').match(/(SAMX)/)) {
                count++
            }
        }
        return count
    }

    const slantRight = (input) => {
        let slanted = structuredClone(input)
        let rows = input.length - 1 // this is the number of rows in the input
        for (const row in input) {
            for (let j = 0; j < rows; j++) {
                slanted[row].unshift(' ')
            }
            for (let j = 0; j < input.length-rows; j++) {
                slanted[row].push(' ')
            }
            rows--
        }
        return slanted
    }

    console.log(slantRight(inputArray))

    const slantLeft = (input) => {
        let slanted = structuredClone(input)
        let i = 0
        for (const row in input) {
            for (let j = 0; j < i; j++) {
                slanted[row].unshift(' ')
            }
            i++
        }
        return slanted
    }


    const sum = (input) => {
        let sum = 0
        sum += horizontalCheck(input)
        sum += horizontalCheck(rotate(input))
        sum += horizontalCheck(push(input))
        sum += horizontalCheck(unshift(input))
        return sum
    }


    console.log(inputArray)
    console.log(push(inputArray))

    console.log(horizontalCheck(inputArray))
    // console.log(horizontalCheck(rotate(inputArray)))
    // console.log(horizontalCheck(rotate(push(inputArray))))
    // console.log(horizontalCheck(unshift(rotate(inputArray))))

    // console.log(sum(inputArray))

})