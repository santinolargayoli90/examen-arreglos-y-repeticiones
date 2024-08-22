let productos = [];
let cantidades = [];


for (let i = 0; i < 6; i++) {
    let producto = prompt('Ingrese el nombre del producto (Tomate, Lechuga, Zanahoria, Papa, Naranja, Mandarina, Pera, Limón):');
    let kilos = Number(prompt('Ingrese la cantidad en kilos del producto:'));

    
    productos.push(producto);
    cantidades.push(kilos);
}


let Tomate = productos.indexOf('Tomate');
if (Tomate == -1) {
    console.log(`Stock de Tomate: ${cantidades[Tomate]} kg`);
} else {
    console.log("No hay stock disponible de Tomate");
}


if (productos.length >= 2) {
    cantidades[0] += 20; 
    cantidades[1] += 20; 
}

console.log("Stock total:");
for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i]}: ${cantidades[i]} kg`);
}


console.log("Productos con más de 20 kg en stock:");
for (let i = 0; i < productos.length; i++) {
    if (cantidades[i] > 20) {
        console.log(`${productos[i]}: ${cantidades[i]} kg`);
    }
}