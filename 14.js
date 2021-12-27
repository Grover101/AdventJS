function missingReindeer(ids) {
    let max = Math.max(...ids)
    for (let i = 0; i < max; i++) {
        let existId = (ids.find(id => id === i) >= 0) ? true : false
        if (!existId) return i
    }
    return max + 1
}

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]), missingReindeer([0, 1]))