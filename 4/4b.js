const input = fs.readFile('4/sample.txt', (err, input) => {
    data = input.toString()

    let inputArray = data.split(/\n/)
    for (const row in inputArray) {
        inputArray[row] = inputArray[row].split('')
    }

    console.log(inputArray)

    const findAnchors = (input) => {
        const regexp = /A/g;
        let coordsList = []
        for (row in input) {
            const joinedRow = input[row].join('')
            const matches = joinedRow.matchAll(regexp);
            for (const match of matches) {
                coordsList.push([match.index, Number(row)])
            }
        }
        return coordsList
    }
    const anchors = findAnchors(inputArray)
    console.log(anchors)

    const checkX = (coordinates, inputarray) => {
        const x = coordinates[0]
        const y = coordinates[1]
        let descending = false
        let ascending = false

        console.log(inputarray.length)
        console.log(inputarray[y].length)


        if ((y > 0 && y < inputarray.length) && (x > 0 && x < inputarray[y].length)) {
            if (
                (inputarray[y - 1][x - 1] === 'M' && inputarray[y + 1][x + 1] === 'S')
                ||
                (inputarray[y - 1][x - 1] === 'S' && inputarray[y + 1][x + 1] === 'M')
            ) {
                console.log('Descening MAS Found!')
                descending = true
            }
            if (
                (inputarray[y + 1][x - 1] === 'M' && inputarray[y - 1][x + 1] === 'S')
                ||
                (inputarray[y + 1][x - 1] === 'S' && inputarray[y - 1][x + 1] === 'M')
            ) {
                console.log('Ascending MAS Found!')
                ascending = true
            }

            if (descending && ascending) {
                return true
            }
        }
    }

    console.log(
        checkX(anchors[0], inputArray)
    )




})