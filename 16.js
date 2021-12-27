function decodeNumbers(symbols) {
    const document = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100
    }

    const symbolsArr = symbols.split('').reverse()

    let amount = 0
    let last = 0

    for (const symbol of symbolsArr) {
        let value = document[symbol]
        if (!value) return NaN
        if (last > value) amount -= value
        else amount += value
        last = value
    }

    return amount
}

console.log(decodeNumbers('..,!'), decodeNumbers(',...'))