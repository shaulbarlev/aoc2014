const input = fs.readFile('4/sample.txt', (err, input) => {
    data = input.toString()

    let inputArray = data.split(/\n/)
    for (const row in inputArray) {
        inputArray[row] = inputArray[row].split('')
    }
    // console.log(inputArray)
    let replacedHorizontal = []
    let replaced = []

    const horizontalCheck = (input) => {
        let count = 0
        for (const row in input) {
            count += input[row].join('').match(/(SAMX)/g)?.length ?? 0
            count += input[row].join('').match(/(XMAS)/g)?.length ?? 0
        }
        return count
    }

    const rotate = (input) => {
        let rotated = []
        for (let i = 0; i < input[0].length; i++) {
            let column = []
            for (let j = 0; j < input.length; j++) {
                // console.log(`${j},${i}`)
                column.push(input[j][i])
            }
            rotated.push(column)
        }
        return rotated
    }

    const slantRight = (input) => {
        let slanted = structuredClone(input)
        let rows = input.length // this is the number of rows in the input
        for (const row in input) {
            for (let j = 0; j < rows; j++) {
                slanted[row].unshift(' ')
            }
            for (let j = 0; j < input.length - rows; j++) {
                slanted[row].push(' ')
            }
            rows--
        }
        return slanted
    }
    
    const slantLeft = (input) => {
        let slanted = structuredClone(input)
        let rows = input.length // this is the number of rows in the input
        for (const row in input) {
            for (let j = 0; j < input.length - rows; j++) {
                slanted[row].unshift(' ')
            }
            for (let j = 0; j < rows; j++) {
                slanted[row].push(' ')
            }
            rows--
        }
        return slanted
    }

    // console.log(slantLeft(inputArray))
    // console.log(
    //     rotate(slantLeft(inputArray))
    // )


    const sum = (input) => {
        let sum = 0
        sum += horizontalCheck(input)
        sum += horizontalCheck(rotate(input))
        sum += horizontalCheck(rotate(slantLeft(inputArray)))
        sum += horizontalCheck(rotate(slantRight(inputArray)))
        return sum
    }


    // console.log(inputArray)
    // console.log(rotate(inputArray))
    

    console.log(horizontalCheck(inputArray))

    console.log(horizontalCheck(
        rotate(inputArray)
    ))

    console.log(horizontalCheck(
        rotate(slantLeft(inputArray))
    ))

    console.log(horizontalCheck(
        rotate(slantRight(inputArray))
    ))


    console.log(sum(inputArray))

})