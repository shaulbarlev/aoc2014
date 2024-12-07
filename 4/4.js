const input = fs.readFile('4/sample.txt', (err, input) => {
    data = input.toString()

    let inputArray = data.split(/\n/)
    for (const row in inputArray) {
        inputArray[row] = inputArray[row].split('')
    }
    // console.log(inputArray)

    const horizontalCheck = (inputArray) => {
        let count = 0
        for (const row in inputArray) {
            // console.log(inputArray[row].join(''))
            if (inputArray[row].join('').match(/(XMAS)|(SAMX)/)) count++
        }
        return count
    }

    const rotate = (inputArray) => {
        let count = 0
        let rotated = []
        for (let i = 0; i < inputArray.length; i++) {
            let column = []
            for (let j = 0; j < inputArray[i].length; j++) {
                column.push(inputArray[j][i])
            }
            rotated.push(column)
        }
        return rotated
    }

    const push = (input) => {
        let pushed = structuredClone(input)
        let i = input.length
        for (const row in input) {
            for (let j = 0; j < i; j++) {
                pushed[row].unshift(' ')
            }
            i--
        }
        return pushed
    }

    const unshift = (input) => {
        let unshifted = structuredClone(input)
        let i = 0
        for (const row in input) {
            for (let j = 0; j < i; j++) {
                unshifted[row].unshift(' ')
            }
            i++
        }
        return unshifted
    }
    
    
    console.log(horizontalCheck(inputArray))
    console.log(horizontalCheck(rotate(inputArray)))
    console.log(horizontalCheck(push(inputArray)))
    console.log(horizontalCheck(unshift(inputArray)))

    console.log( rotate(inputArray).length )
    

})
