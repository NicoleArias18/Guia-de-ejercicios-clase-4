import readline from 'readline';

export const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,

})

// // En un formulario web pides al usuario su nombre completo y quieres 
// asegurarte de que no haya espacios al inicio o final, y además quieres 
// mostrar cuántos caracteres tiene el nombre sin contar los espacios. 
// rl.question("Ingrese su nombre completo: ", (nombre) =>{
// const  nCompleto = nombre.trim()
// const nSinEspacios = nombre.replaceAll(" "," ")
// const nCaracteres = nSinEspacios.length;
// console.log(`Nombre: ${nCompleto}`);
// console.log(`Nombre sin espacio ${nSinEspacios}`);
// console.log(`El numero de caracteres es de: ${nCaracteres}`);


// rl.close()
// })

//Ejercicio 2
// Un sistema de registro de usuarios necesita guardar todos los correos 
// electrónicos en minúsculas para evitar duplicados causados por 
// diferencias en mayúsculas y minúsculas. Además, se requiere verificar si 
// el correo pertenece al dominio @gmail.com antes de aceptarlo. 
// El programa debe: 
// Solicitar al usuario su correo electrónico. 
// Convertir el correo ingresado a minúsculas. 
// Verificar si contiene el dominio @gmail.com. 

// rl.question("Ingrese su correo electronico: ", (correo)=>{
// const correoMin = correo.toLowerCase()
// const veriDom = correo.includes("@gmail.com")
// console.log(`El correo electronico es ${correoMin}`);
// console.log(`El correo incluye @gmal.com? ${veriDom}`)




//     rl.close
// })

//Ejercicio 3
//  de un código generado automáticamente solo se requiere mostrar los 
// últimos 4 caracteres 

// rl.question("Ingrese un codigo aleatorio  ", (codigo)=>{
//     const ulti4caracter = codigo.slice(-4)
//     console.log(`Ultimos 4 caracteres son ${ulti4caracter}`);
// })

//Ejercicio 4
// Un programador quiere saber en qué parte de su mensaje aparece la 
// palabra error. 

rl.question("En donde esta la palabra 'error'", (error)=>{
const buscar = error.indexOf("error")
console.log(`La palabra error se encuentra en esta posicion: ${buscar}`);




    rl.close


})