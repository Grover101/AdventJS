function canReconfigure(from, to) {
    let auxArr = []
    let flag = true

    if (from.length !== to.length) return false

    from.split('').forEach((_char, i) => {
        let existFrom = auxArr.find(x => x[0] === _char)
        let existTo = auxArr.find(x => x[1] === to[i])
        if ((!existFrom && !existTo) || (existFrom && existFrom[1] === to[i])) auxArr.push([_char, to[i]])
        else flag = false
    });

    return flag;
}

const from = 'BAL'
const to = 'LIB'

const from2 = 'MMM'
const to2 = 'MMD'

console.log(canReconfigure(from, to)) // true 
console.log(canReconfigure(from2, to2)) // false