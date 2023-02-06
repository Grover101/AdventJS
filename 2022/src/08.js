function checkPart(part) {
    return [...part].some((_, i, arr) => {
        let w = arr.filter((_, y) => y != i)
        return w.join('') == w.reverse().join('')
    })
}

console.log(checkPart('uwu')) // true
// "uwu" es un palíndromo sin eliminar ningún carácter

console.log(checkPart('miidim')) // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

console.log(checkPart('midu')) // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
