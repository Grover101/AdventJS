function executeCommands(commands) {
    const cpu = [0, 0, 0, 0, 0, 0, 0, 0]
    const cmd = {
        MOV: x => {
            const mov = x.split(',')[0].split(' ')[1]
            cpu[+x.at(-1)] = cpu[+mov.at(-1)] * +mov.startsWith('V') + ~~mov
        },
        ADD: x => {
            const v1 = +x.split(',')[0].at(-1)
            const v2 = +x.split(',')[1].at(-1)
            cpu[v1] = (cpu[v1] + cpu[v2]) % 256
        },
        INC: x => {
            cpu[+x.at(-1)] = (cpu[+x.at(-1)] + 1) % 256
        },
        DEC: x => {
            cpu[+x.at(-1)] = (((cpu[+x.at(-1)] - 1) % 256) + 256) % 256
        },
        JMP: x => {
            commands = commands.concat(
                commands.slice(
                    +x.split(' ').at(-1),
                    (commands.indexOf(x) + 1) * !!cpu[0]
                )
            )
        }
    }
    for (let i = 0; i < commands.length; i++) {
        cmd[commands[i].split(' ')[0]](commands[i])
    }
    return cpu
}

console.log(
    executeCommands([
        'MOV 5,V00', // V00 es 5
        'MOV 10,V01', // V01 es 10
        'DEC V00', // V00 ahora es 4
        'ADD V00,V01' // V00 = V00 + V01 = 14
    ])
)
// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(
    executeCommands([
        'MOV 255,V00', // V00 es 255
        'INC V00', // V00 es 256, desborda a 0
        'DEC V01', // V01 es -1, desborda a 255
        'DEC V01' // V01 es 254
    ])
)
// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(
    executeCommands([
        'MOV 10,V00', // V00 es 10
        'DEC V00', // decrementa V00 en 1  <---┐
        'INC V01', // incrementa V01 en 1      |
        'JMP 1', // bucle hasta que V00 sea 0 ----┘
        'INC V06' // incrementa V06 en 1
    ])
)

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
