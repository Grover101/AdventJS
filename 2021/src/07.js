export default function contains(store, product) {
    let exist = false
    for (const item in store) {
        if (typeof store[item] === 'object') exist = contains(store[item], product)
        else if (store[item] === product) return true
    }
    return exist
}

const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta'
        }
    }
}

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

console.log(contains(almacen, 'camiseta'), contains(otroAlmacen, 'gameboy')) 