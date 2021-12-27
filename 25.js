function canMouseEat(direction, game) {
    const MOUSE = "m";
    const FOOD = "*";
    let isMatch = false;

    for (let i = 0; i < game.length; i++) {
        const positionMouse = game[i].findIndex((item) => item === MOUSE);
        if (positionMouse !== -1) {
            switch (direction) {
                case "up":
                    if (i != 0) {
                        isMatch = game[i - 1][positionMouse] === FOOD;
                    }
                    break;
                case "down":
                    if (i !== game.length - 1) {
                        isMatch = game[i + 1][positionMouse] === FOOD;
                    }
                    break;
                case "left":
                    if (positionMouse > 0) {
                        isMatch = game[i][positionMouse - 1] === FOOD;
                    }
                    break;
                case "right":
                    if (positionMouse < game[i].length) {
                        isMatch = game[i][positionMouse + 1] === FOOD;
                    }
                    break;
            }
            if (isMatch) i = game.length;
        }
    }
    return isMatch;
}

const room = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down', room)) // false
console.log(canMouseEat('right', room)) // true
console.log(canMouseEat('left', room)) // false