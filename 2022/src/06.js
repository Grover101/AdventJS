function createCube(size) {
    const top = [],
        bottom = []
    for (let i = 0; i < size; i++) {
        top.push(
            ' '.repeat(size - i - 1) + '/\\'.repeat(i + 1) + '_\\'.repeat(size)
        )
        bottom.push(' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size))
    }
    return [top, bottom].flat().join('\n')
}

console.log(createCube(3))
console.log(createCube(1))
console.log(createCube(2))
