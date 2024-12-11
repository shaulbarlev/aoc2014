const input = fs.readFile('4/input.txt', 'utf-8', (err, input) => {
    data = input.toString()

    let inputArray = data.split(/\n/g)
    for (const row in inputArray) {
        inputArray[row] = inputArray[row].split('')
    }

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

        if ((y > 0 && y < inputarray.length - 1) && (x > 0 && x < inputarray[y].length)) {
            if (
                (inputarray[y - 1][x - 1] === 'M' && inputarray[y + 1][x + 1] === 'S')
                ||
                (inputarray[y - 1][x - 1] === 'S' && inputarray[y + 1][x + 1] === 'M')
            ) {
                // console.log('Descening MAS Found!')
                descending = true
            }
            if (
                (inputarray[y + 1][x - 1] === 'M' && inputarray[y - 1][x + 1] === 'S')
                ||
                (inputarray[y + 1][x - 1] === 'S' && inputarray[y - 1][x + 1] === 'M')
            ) {
                // console.log('Ascending MAS Found!')
                ascending = true
            }
        }
        return descending && ascending ? true : false
    }

    // console.log(anchors)

    // console.log(
    //     anchors.map(couple => checkX(couple, inputArray))
    // )


    let sum = anchors.reduce((accu, couple) => {
        if (checkX(couple,inputArray)) accu++
        return accu
    }, 0)

    console.log(sum)


})