const fs = require('fs');
const input = fs.readFile('6/example.txt', 'utf-8', (err, input) => {

    class Record {
        constructor(xIn,yIn,directionIn) {
            this.x = xIn
            this.y = yIn
            this.direction = directionIn
        }
    }



    let map = input.split(/\n/)
    map = map.map(line => line.split(''))
    // console.log(map)
    let i = 0
    let atEdge = false
    let distinctPositions = 1

    let x
    let y
    const next = (mapInput) => {
        //determine guard position
        let direction
        const getPos = (mapInput) => {
            for (const line in mapInput) {
                index = mapInput[line].findIndex(char => char == 'V' || char == '^' || char == '<' || char == '>')
                if (index != -1) {
                    x = index
                    y = Number(line)
                    direction = mapInput[line][index]
                }
            }
            // return [x,y,direction]
            return new Record(x,y,direction)
        }
        x = getPos(map).x
        y = getPos(map).y

        
        const getFrontPos = (xIn, yIn, directionIn) => {
            switch (directionIn) {
                case '^':
                    // return [xIn, yIn - 1]
                    return new Record(xIn, yIn - 1, '>')
                case '>':
                    // return [xIn + 1, yIn]
                    return new Record(xIn + 1, yIn, 'V')
                case 'V':
                    // return [xIn, yIn + 1]
                    return new Record(xIn, yIn + 1, '<')
                case '<':
                    // return [xIn - 1, yIn]
                    return new Record(xIn - 1, yIn, '^')
            }
        }
        
        let frontX = getFrontPos(x, y, direction).x
        let frontY = getFrontPos(x, y, direction).y
        let newDirection = getFrontPos(x, y, direction).direction

        
        // console.log(frontY)
        // console.log(frontX)
        
        const advance = (directionInput) => {
            map[y][x] = 'X'
            if (map[frontY][frontX] != 'X') distinctPositions++
            map[frontY][frontX] = direction
        }
        // console.log(map[frontY][frontX])
        //determine if in front of guard there's an obstacle
        if (map[frontY][frontX] == '#') {
            //rotate!
            map[y][x] = newDirection
        }
        else { //free to continue
            advance(direction)
            frontX = getFrontPos(x, y, direction).x
            frontY = getFrontPos(x, y, direction).y
            x = getPos(map).x
            y = getPos(map).y
            if (
                y == map.length-1
                ||
                y == 0
                ||
                x == map[0].length-1
                ||
                x == 0
            ) {
                atEdge = true
            }
        }
        return map
    }

    while (!atEdge) {
        i++
        if (i >= 5500) break
        next(map)
    }

    // for (let j = 0; j<54; j++) {
    //     i++
    //     if (i >= 500) break
    //     next(map)
    // }

    console.log(
        map,i,distinctPositions,x,y
    )
})