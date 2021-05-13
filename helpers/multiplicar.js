const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(num = 5, listar, hasta = 10) => {

    try {

        //tabla de multiplicar (5)
        let result = 0;
        let salida = '';
        let consola = ''

        for (let i = 0; i <= hasta; i++) {

            result = num * i;
            salida += `${colors.red(num)} ${'x'.yellow} ${colors.red(i)} = ${colors.red(result)}\n`
            consola += `${num} x ${i} = ${result}\n`

        }

        if (listar) {
            console.log('---------------------------------')
            console.log(`Tabla del ${num}`.green)
            console.log('---------------------------------')
            console.log(salida)
        }

        fs.writeFileSync(`./salida/Tabla-${num}.txt`, consola)

        return `Tabla-${num}-txt`

    } catch (error) {

        throw error

    }


    /* fs.writeFile(`tabla-${num}-txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla-${num}.txt creado exitosamente!`)
    }) */
}

module.exports = {
    crearArchivo
}