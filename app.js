const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();


//console.log('base yargs', argv.base)


//console.log(process.argv);
/* const [, , arg3 = 'num=5'] = process.argv;
const [, num = 5] = arg3.split('=')

console.log(num); */

/* const getInfoArchivo = async(num) => {
    try {
        const archivo = await crearArchivo(num)
        return `El archivo ${archivo} fue creado exitoamente!`;
    } catch (error) {
        throw error
    }
} */

//const num = 3;

crearArchivo(argv.n, argv.l, argv.h)
    .then(msg => console.log(msg.rainbow, 'Archivo creado exitosamente!'))
    .catch(err => console.log(err))