const input = fs.readFile('4/mini.txt', (err, input) => {
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
            count += input[row].join('').match(/(MAS)/g)?.length ?? 0
            count += input[row].join('').match(/(SAM)/g)?.length ?? 0
        }
        return count
    }

    


})