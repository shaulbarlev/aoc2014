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
            for (let j = 1; j < rows; j++) {
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
            for (let j = 1; j < rows; j++) {
                slanted[row].push(' ')
            }
            rows--
        }
        return slanted
    }
    // input[row].join('').match(/(SAMX)/g)?.length
    console.log(inputArray[1].join(''))

    const findAnchors = (input) => {
        const regexp = /A/g;
        let anchorsCoords = []

        for (row in input) {
            const str = input[row].join('')
            const matches = str.matchAll(regexp);

            for (const match of matches) {
                // console.log(
                //     `Found ${match[0]} at row:${Number(row)+1}, char:${match.index+1}`,
                // );
                anchorsCoords.push([match.index,Number(row)])
            }
        }
        return anchorsCoords
    }
    anchorsCoords = findAnchors(inputArray)
    console.log(anchorsCoords)

    //map to an array of cropped regions
    const cropRegions = (array, coordinatesArray) => {
        return coordinatesArray.map(coordinates => {
            //                   [1] = y:row               [0] = x:char
            let row1 = array[coordinates[1]-1].slice(coordinates[0]-1,coordinates[0]+2)
            let row2 = array[coordinates[1]].slice(coordinates[0]-1,coordinates[0]+2)
            let row3 = array[coordinates[1]+1].slice(coordinates[0]-1,coordinates[0]+2)

            return [
                row1,
                row2,
                row3
            ]
        })
    }
    console.log(cropRegions(inputArray,anchorsCoords))

    console.log(inputArray)
    console.log(
        (
            rotate(
                slantLeft(
                    inputArray
                ))
        )
    )
    console.log(
        (
            rotate(
                slantRight(
                    inputArray
                ))
        )
    )


})