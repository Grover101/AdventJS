function getMaxGifts(giftsCities, maxGifts, maxCities) {
    // return Math.max(
    //     ...giftsCities
    //         .sort((x, y) => y - x)
    //         .reduce(
    //             (result, _, i) => (
    //                 i && giftsCities.unshift(giftsCities.pop()),
    //                 (i = giftsCities
    //                     .slice(0, maxCities)
    //                     .reduce((acc, curr) => (acc += curr), 0)),
    //                 i <= maxGifts && result.push(i),
    //                 i - giftsCities[maxCities - 1] <= maxGifts &&
    //                     result.push(i - giftsCities[maxCities - 1]),
    //                 result
    //             ),
    //             []
    //         ),
    //     0
    // )
    const giftsBT = (giftsCities, gifts, cities, i) => {
        if (cities > maxCities || gifts > maxGifts) return 0
        if (i == giftsCities.length) return gifts

        const res1 = giftsBT(
            giftsCities,
            gifts + giftsCities[i],
            cities + 1,
            i + 1
        )
        const res2 = giftsBT(giftsCities, gifts, cities, i + 1)

        return Math.max(res1, res2)
    }

    return giftsBT(giftsCities, 0, 0, 0)
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
