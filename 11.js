function shouldBuyFidelity(times) {
    const entranceValue = 12; // 12$
    const discount = 0.75; // 75%
    const tarjetValue = 250; // 250$
    let amount = 0;

    for (let time = 1; time <= times; time++) {
        amount += entranceValue * (Math.pow(discount, time))
    }

    let normal = entranceValue * times
    let withTarjet = tarjetValue + amount
    return (withTarjet < normal)
}

console.log(shouldBuyFidelity(1), shouldBuyFidelity(100))