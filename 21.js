function canCarry(capacity, trip) {
    let maxDeliveryPoint = Math.max(...trip.map(step => step[2]))
    let actualCapacity = 0

    for (let point = 1; point <= maxDeliveryPoint; point++) {
        trip.forEach(step => {
            if (step[1] === point) actualCapacity += step[0]
            if (step[2] === point) actualCapacity -= step[0]
        })

        if (actualCapacity > capacity) return false;
    }

    return true
}

console.log(canCarry(4, [[2, 5, 8], [3, 6, 10]])) // false
console.log(canCarry(3, [[1, 1, 5], [2, 2, 10]])) // true