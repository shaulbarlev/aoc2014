const input = fs.readFile('6/example.txt', 'utf-8', (err, input) => {
    let map = input.split(/\n/)
    map = map.map(line => line.split(''))
    console.log(map)

    const next = (mapInput) => {
        //determine guard position
        let pos
        for (const line in mapInput) {
            index = mapInput[line].findIndex(char => char == 'V' || char == '^' || char == '<' || char == '>')
            if (index != -1) {
                pos = [index, Number(line), mapInput[line][index]]
                break
            }
        }
        // return pos

        //determine if in front of guard there's an obstacle
        switch (pos[2]) {
            case '^':
                
                break
            case 'V':
                break
            case '<':
                break
            case '>':
                break
        }
    }

    console.log(
        next(map)
    )
})