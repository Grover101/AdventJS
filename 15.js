function checkSledJump(heights) {
    let flag = false
    let last = null
    const max = Math.max(...heights)

    for (const i of heights) {
        if (i === max) flag = true
        else if ((flag && i > last) || (last && last === i)) return false
        last = i
    }
    return (max !== heights[heights.length - 1])
}

console.log(checkSledJump([2, 4, 4, 6, 2]), checkSledJump([1, 2, 3, 2, 1]))