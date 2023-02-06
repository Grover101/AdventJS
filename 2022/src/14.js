function getOptimalPath(path) {
    return path
        .reverse()
        .reduce((acc, curr) =>
            curr.map((num, i) => num + Math.min(acc[i], acc[i + 1]))
        )[0]
}

console.log(getOptimalPath([[0], [2, 3]])) // 2
// 0 -> 2

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5
// 0 -> 4 -> 1

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8
// 1 -> 1 -> 5 -> 1
