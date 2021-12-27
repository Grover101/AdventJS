function contarOvejas(ovejas) {
    ovejas = ovejas.filter(element => {
        if (element.color == 'rojo' && element.name.includes('Na'))
            return element
    });
    return ovejas
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)