function createXmasTree(height) {
    let arbol = ''
    let ancho = (height * 2) - 2

    for (let index = 0; index < height; index++) {
        let nivelRepite = (ancho / 2) - (index * 1)
        arbol += '_'.repeat(nivelRepite) + '*'.repeat(2 * index + 1) + '_'.repeat(nivelRepite) + '\n'
    }

    let tronco = '_'.repeat(ancho / 2) + '#' + '_'.repeat(ancho / 2)
    arbol += tronco + '\n' + tronco
    return arbol
}

console.log(createXmasTree(5))