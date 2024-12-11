const input = fs.readFile('6/example.txt', 'utf-8', (err, input) => {
    let map = input.split(/\n/)
    map = map.map(line => line.split(''))
    console.log(map)
    let i = 0
    let atEdge = false
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
        const x = pos[0]
        const y = pos[1]
        const direction = pos[2]
        let newDirection
        const getFrontPos = (posInput) => {
            switch (posInput[2]) {
                case '^':
                    newDirection = '>'
                    return [posInput[0], posInput[1] - 1]
                case '>':
                    newDirection = 'V'
                    return [posInput[0] + 1, posInput[1]]
                case 'V':
                    newDirection = '<'
                    return [posInput[0], posInput[1] + 1]
                case '<':
                    newDirection = '^'
                    return [posInput[0] - 1, posInput[1]]
            }
        }

        const frontX = getFrontPos(pos)[0]
        const frontY = getFrontPos(pos)[1]
        //check if guard is at the edge.
        if (frontY > 8) atEdge = true


        const advance = (directionInput) => {
            map[y][x] = 'X'
            map[frontY][frontX] = pos[2]
        }

        //determine if in front of guard there's an obstacle
        if (map[frontY][frontX] == '#') {
            //rotate!
            map[y][x] = newDirection
        }
        else { //free to continue
            advance(direction)
        }
        return map
    }

    while (!atEdge) {
        next(map)
        i++
    }

    console.log(
        next(map),i
    )

})