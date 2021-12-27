function sumPairs(numbers, result) {
    let valor = null
    numbers.forEach((num, i) => {
        numbers.forEach((num2, j) => {
            if (i !== j && ((num + num2) === result) && !valor) valor = [num, num2]
        });
    });

    return valor
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))