import readline from 'readline';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

// rl.question("Ingrese su primera nota ",(not1) => {
//     rl.question("Ingrese su segunda nota ", (not2) => {
//         rl.question("Ingrese su tercera nota ", (not3)=> {
//             let promedio = parseFloat(not1) + parseFloat(not2) + parseFloat(not3)/ 3
//             console.log('Su promedio es de', promedio );
//             rl.close()
            
//         })    
//     })
// })

// rl.question("Ingrese sus kilometros ", (kl) => {
//     let millas = ( 0.621371)
//     let conversion = parseFloat(kl) * millas
//     console.log('Los kilometros ingresados convertidos a millas son: ', conversion.toFixed(2))
//     rl.close();
// })

rl.question("Ingrese su presio unitario del producto ", (produc)=> {
    rl.question("Ingrese la cantidad de productos comprados ", (totalPro)=>{
        let costo = parseFloat(produc) * parseInt(totalPro)
        console.log('El costo total es de:', costo)
        rl.close
    })
})

