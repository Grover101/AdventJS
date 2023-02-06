distributeGifts = (packOfGifts, reindeers) =>
    Math.floor((reindeers.join('').length * 2) / packOfGifts.join('').length)

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2
