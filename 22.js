function countDecorations(bigTree) {
    let amount = 0
    for (const item in bigTree) {
        if (typeof bigTree[item] === 'object') amount += countDecorations(bigTree[item])
        else amount += bigTree.value
    }
    return amount
}

const tree = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null
    },
    right: {
        value: 3,
        left: null,
        right: null
    }
}

console.log(countDecorations(tree)) // 6