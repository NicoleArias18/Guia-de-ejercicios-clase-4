//READLINE
//importamos el modulo
// const readline = require('readline')

import readline from 'readline';

//creamos la interfaz
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,

})

//Realixar pregunta al usuario

rl.question("Como te llamas? ", (nombre) => {
    console.log(`Hola, buen dia ${nombre}`)
    rl.close();
});




