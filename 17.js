function countPackages(carriers, carrierID) {
    let carrier = carriers.find((x) => x[0] === carrierID)
    let packages = carrier[1]

    carrier[2].forEach(subordinate => {
        packages += countPackages(carriers, subordinate)
    })

    return packages
}

const carriers = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
]

console.log(countPackages(carriers, 'camila'))