function checkStepNumbers(systemNames, stepNumbers) {
    // return systemNames.every(
    //   (e, i) =>
    //     stepNumbers[i] <= stepNumbers[i + systemNames.slice(i + 1).indexOf(e) + 1]
    // );
    const ObjectBase = Object.assign(
        {},
        ...systemNames.map((name, i) => ({ [name]: [] }))
    )

    return Object.values(
        systemNames.reduce((acc, curr, index) => {
            acc[curr] = [...acc[curr], stepNumbers[index]]
            return acc
        }, ObjectBase)
    ).every(c => c.slice(1).every((next, index) => next >= c[index]))
}

const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

console.log(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])) // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente
