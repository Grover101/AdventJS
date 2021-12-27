function getCoins(change) {
    let coins = [1, 2, 5, 10, 20, 50]
    let changeCoins = [...coins].fill(0)

    coins.reverse().forEach((coin, i) => {
        if (change && (change % coin) >= 0 && coin <= change) {
            changeCoins[i] = Math.floor(change / coin)
            change -= (coin * Math.floor(change / coin))
        }
    });
    return changeCoins.reverse()
}

console.log(getCoins(51), getCoins(100))