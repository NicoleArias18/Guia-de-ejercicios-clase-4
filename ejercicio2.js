//Ejercicios de clase

import { console } from 'inspector';
import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,

})

// rl.question("En que ciudad vives? ", (ciudad) => {
//     console.log(`Wow, la ciudad de ${ciudad} es muy linda`)
//     rl.close();


//Ejercicio 2
// rl.question("Cual es tu color favorito? ", (color) => {
//     console.log(`Hola, ${color}`)
//     rl.close();
// })

rl.question("Ingrese la primera palabra: ", (p1)=> {

rl.question("Ingrese la segunda palabra: ", (p2) =>{
    console.log(`$(p1) $(p2)`);
    rl.close();

})
})
