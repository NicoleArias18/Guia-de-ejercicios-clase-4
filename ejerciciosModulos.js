import readline from 'readline';

export const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,

})

//Un sistema de gestion de pedidosrecibe codigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del pedido y el numero de orden usando el metodo substring()
//requisotos:
//Extraer e; año del pedido y el numero de orden
rl.question("Ingrese el codigo del pedido(ej: FED-2025-00045): ",(codigo)=>{
    const año = codigo.substring(4,8);
    const numeroDeOrden = codigo.substring(9);
    console.log(`El año es: ${año}`);
    console.log(`El numero de orden es: ${numeroDeOrden}`);


    rl.close


})

