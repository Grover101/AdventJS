function wrapGifts(gifts) {
    if (!gifts.length) return gifts

    const length = gifts[0].length
    let newGifts = []

    newGifts.push('*'.repeat(length + 2))
    for (const gift of gifts) newGifts.push('*' + gift + '*')
    newGifts.push('*'.repeat(length + 2))

    return newGifts
}

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))