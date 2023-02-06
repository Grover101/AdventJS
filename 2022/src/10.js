function checkJump(heights) {
    const left = heights.splice(0, heights.indexOf(Math.max(...heights)))
    const conditionLeft = left.slice(1).every((l, i) => l >= left[i])
    const conditionRight = heights.slice(1).every((h, i) => h <= heights[i])
    return (
        conditionLeft && conditionRight && !!left.length && heights.length > 1
    )
}

const heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights)) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights1 = [1, 7, 3, 5]
console.log(checkJump(heights1)) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/
