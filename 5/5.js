const input = fs.readFile('5/input.txt', 'utf-8', (err, input) => {
    let [rules,updates] = [input.split(/\n\n/)[0],input.split(/\n\n/)[1]]
    rules = rules.split(/\n/)
    rules = rules.map(rule => rule.split('|'))
    // console.log(rules)
    
    updates = updates.split(/\n/)
    updates = updates.map(update => update.split(','))
    console.log(updates)


})