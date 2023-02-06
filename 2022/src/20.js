function howManyReindeers(reindeerTypes, gifts) {
    return gifts.map(gift => {
        let max = gift.weight
        const reindeers = reindeerTypes
            .map(x => [x.type, x.weightCapacity])
            .filter(x => x[1] < max)
            .sort((a, b) => a[1] - b[1]) // Menor a Mayor

        const res = reindeers.map(([type]) => ({
            type,
            num: 0
        }))

        reindeers.map((_, i) => {
            const sliced = reindeers.slice(0, reindeers.length - i)
            const sum = sliced.reduce((sum, e) => sum + e[1], 0)
            sliced.map((_, i) => {
                res[i].num += Math.floor(max / sum)
            })
            max %= sum
        })

        return {
            country: gift.country,
            reindeers: res.reverse()
        }
    })
}

const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
]

const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
]

console.log(JSON.stringify(howManyReindeers(reindeerTypes, gifts), null, 2))
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
