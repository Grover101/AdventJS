function learn(time, courses) {
    let coursesToLearn = []

    courses.forEach((course, i) => {
        let idx = []
        courses.forEach((course2, j) => {
            let sum = course + course2
            if ((sum <= time) && i !== j && ((idx.length && sum > (courses[idx[0]] + courses[idx[1]])) || !idx.length)) idx = [i, j]
        });
        if (idx.length) coursesToLearn.push({ idx, max: courses[idx[0]] + courses[idx[1]] })
    });

    coursesToLearn.sort((a, b) => ((a.max < b.max) ? 1 : ((a.max > b.max) ? -1 : 0)))
    return coursesToLearn.length ? coursesToLearn[0].idx : null
}

console.log(learn(8, [8, 2, 1]), learn(25, [10, 15, 20, 5]))