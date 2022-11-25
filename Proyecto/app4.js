//Carrito de compras: El objetivo es ir agregando objetos a un carritos de compra (lista) y que al final la muestre

const Carrito=[];

while(confirm("¿Listo para continuar?")){
    Carrito.push(prompt("Ingresa la fruta: "));
}

console.log("Tu carrito de compras: ");
for(i=0;i<Carrito.length;i++){
    console.log(Carrito[i]);
}