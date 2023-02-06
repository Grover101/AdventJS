function fixFiles(files) {
    let newFiles = []
    let auxDoc = {}

    for (const file of files) {
        let auxFile = file
        if (auxDoc[file]) {
            auxFile = `${file}(${auxDoc[file]})`
            auxDoc[file] += 1
        }
        else auxDoc[file] = 1
        newFiles.push(auxFile)
    }
    return newFiles
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files))