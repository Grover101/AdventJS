function fitsInOneBox(boxes) {
    return boxes
        .sort((x, y) => {
            return y.l + y.w + y.h - (x.l + x.w + x.h)
        })
        .slice(1)
        .every((box, index) => {
            return (
                box.l < boxes[index].l &&
                box.w < boxes[index].w &&
                box.h < boxes[index].h
            )
        })
}

console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ])
)
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ])
)
console.log(
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ])
)
