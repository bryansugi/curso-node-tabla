const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero de la tabla de multipmicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabola en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Es el numero hasta donde va la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.n)) {
            throw 'El valor debe ser un numero bryan'
        } else if (isNaN(argv.h)) {
            throw 'El valor de hasta debe ser un numero bryan'
        }
        return true
    })
    .argv

module.exports = argv;