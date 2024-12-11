const input = fs.readFile('5/example.txt', 'utf-8', (err, input) => {
    let [rules, updates] = [input.split(/\n\n/)[0], input.split(/\n\n/)[1]]
    rules = rules.split(/\n/)
    rules = rules.map(rule => rule.split('|'))
    // console.log(rules)

    updates = updates.split(/\n/)
    updates = updates.map(update => update.split(','))
    console.log(rules[0])

    const checkOrder = (update) => {
        // iterating over all the rules.
        for (const rule in rules) {
            // checking if the update contains both numbers in the current rule.
            let indexOfFirstValue = update.indexOf(rules[rule][0])
            let indexOfSecondValue = update.indexOf(rules[rule][1])
            if (indexOfFirstValue != -1 && indexOfSecondValue != -1) {
                console.log(indexOfFirstValue)
                console.log(indexOfSecondValue)
                if (indexOfSecondValue < indexOfFirstValue) {
                    return false
                }
            }
        }
        return true
    }

    console.log(updates[0])

    console.log(
        checkOrder(updates[5])
    )
})