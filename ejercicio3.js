import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

rl.question("ingrese una temperatura en celsius ", (celsius) => {
    let temperatura = parseFloat(celsius);
    let Fa = (temperatura * 9/5)+ 32
    console.log('La conversion de la temperatura es: ', Fa);
    rl.close();


})
   
//     rl.question("Ingrese el segundo numero ", (n2) => {
//          let num1 = parseFloat(n1)
//         let suma = num1 + parseFloat(n2);
//         console.log('La suma es igual a: ' + suma)
//         rl.close()


//     })

// })

