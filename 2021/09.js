function groupBy(collection, it) {
    let newObj = {}
    for (const item of collection) {
        let key_ = (typeof it === 'function') ? it(item) : item[it]
        newObj[key_] = (newObj[key_]) ? [...newObj[key_], item] : [item]
    }
    return newObj
}

let test1 = groupBy([6.1, 4.2, 6.3], Math.floor)
let test2 = groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
], 'rating')

console.log(test1, test2)