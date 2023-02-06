function fixLetter(letter) {
    return letter
        .trim()
        .replace(/,\s{0,1}/g, ', ')
        .replace(/\s+/g, ' ')
        .replace(/\s{1}([,.\?\!])/g, '$1')
        .replace(/([a-z])$/gi, '$1.')
        .replace(/santa claus/gi, 'Santa Claus')
        .replace(/\?+/g, '?')
        .replace(/[\?\!.]+\s[a-z]|^[a-z]/gi, c => c.toUpperCase())
}

console.log(
    fixLetter(
        ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
    )
)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(
    fixLetter(
        "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
    )
)
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
