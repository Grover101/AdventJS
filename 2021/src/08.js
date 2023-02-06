function maxProfit(prices) {
    let gain = -1
    for (const price of prices) {
        let minPrice = price
        for (const price2 of prices) {
            if (price2 < price && (prices.indexOf(price2) < prices.indexOf(price)) && price2 < minPrice) {
                minPrice = price2
                if ((price - price2) > gain) gain = (price - price2)
            }
        }
    }
    return gain
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesAda = [3, 3, 3, 3, 3]

console.log(maxProfit(pricesBtc), maxProfit(pricesAda))