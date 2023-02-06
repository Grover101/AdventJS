function listGifts(letter) {
    const arrayGifts = letter.split(' ')
    const count = {}

    const filterUndesired = arrayGifts
        .filter(gift => /^(?!_)/.test(gift))

    for (const num of filterUndesired)
        count[num] = count[num] ? count[num] + 1 : 1

    return count
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)