const input = fs.readFile('4/testinput.txt', (err, input) => {
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



    console.log(horizontalCheck(inputArray))

})