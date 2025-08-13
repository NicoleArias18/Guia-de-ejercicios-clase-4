//modulo
import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,

})

//pregunta al usuario
rl.question("Pon una frase ", (frase) => {
    //convertir la frase a mayuscula
    console.log('\n === Tratamiento de cadenas ===');


    //1.length
    const fraseLength = frase.length;
    console.log(`La longitud de la frase es de: ${fraseLength}`)
    rl.close()

    //2.toUpperCase
    const fraseMayus = frase.toUpperCase()
    console.log(`La frase en mayusculas es: ${fraseMayus}`);
    rl.close()

    
//3.toLowerCase
const fraseMinus = frase.toLowerCase()
console.log(`La frase en minusculas es ${fraseMinus}`
);

rl.close()

//4.trim
const fraseTrim = frase.trim()
console.log(`La frase sin espacios al inicio y al final es: ${fraseTrim}`);
rl.close()

//5.substring(inicio, fin)
const subCadena = frase.substring(6, 2);
console.log(`Los primeros 5 caracteres de la frase son: ${subCadena}`);

rl.close()

//6.slice
const subCadenaSlice = frase.slice(-5);
console.log (`Los primeros 5 caracteres de la frase son: ${subCadenaSlice}`);
rl.close()

//7.replace
const fraseReemplazada = frase.replace('hola', 'adios')
console.log (`La frase hola reemplazado por adios es: ${fraseReemplazada}`);
rl.close

//8.replaceall
const fraseArrray = frase.replaceAll
console.log(`La frase con todas la ocurrencias "hola" sera reemplazada por adios ${fraseArrray}`);
rl.close()

//9.split
const fraseArray = frase.split(' ');
console.log(`La frase dividida es palabras ${fraseArray}`);
rl.close()

//10.includes
const incluyeHola = frase.includes('hola');
console.log(`La frase incluye la palabra ${incluyeHola}`);
rl.close()

//11.indexof
const indeceHola = frase.indexOf('hola')
console.log(`El indice de la primera ocurrencia de hola es ${indeceHola}`);
rl.close()

//12.startsWith(texto)
const empezamosConHola = frase.startsWith('adios');
console.log(`La frase empiexa con hola: ${empezamosConHola}`);
rl.close()

//13..endsWith(texto)
const terminaConAdios = frase.endsWith('adios')
console.log('la frase termina con: $')




})

