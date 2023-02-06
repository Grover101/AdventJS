function printTable(gifts) {
    gifts = gifts.map(item => [item.name, '' + item.quantity])
    gifts.unshift(['Gift', 'Quantity'])

    const lengthGift = Math.max(...gifts.map(x => x[0].length))
    const lengthQuantity = Math.max(...gifts.map(x => x[1].length))

    gifts.splice(1, 0, ['-'.repeat(lengthGift), '-'.repeat(lengthQuantity)])

    const tables = gifts.reduce(
        (str, x) =>
            str +
            '| ' +
            x[0].padEnd(lengthGift) +
            ' | ' +
            x[1].padEnd(lengthQuantity) +
            ' |' +
            '\n',
        ''
    )

    const top = '+'.repeat(lengthGift + lengthQuantity + 7) + '\n'
    const bottom = '*'.repeat(lengthGift + lengthQuantity + 7)

    return top + tables + bottom
}

console.log(
    printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 }
    ])
)

console.log(
    printTable([
        { name: 'PlayStation 5', quantity: 9234782374892 },
        { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
)
