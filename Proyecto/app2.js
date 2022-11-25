//Programa 1 Solicitud de nombre
function nombre() {
    let nombre = prompt("Ingresa tu nombre:");
    console.log("Su nombre es:" + nombre);
}



//Programa 2 Suma de dos numeros
function suma() {
    let multi1 = parseInt(prompt("Ingrese el primer numero:"));
    let multi2 = parseInt(prompt("Ingrese el segundo numero:"));
    suma = multi1 + multi2;
    console.log("La suma es:" + suma);

}

//Programa 3, 4 y 5 Compuertas 
function compuertas(){
    console.log("AND");
let result_and1 = false && false
console.log("Resultado AND F-F: " + result_and1)


let result_and2 = false && true
console.log("Resultado AND F-V: " + result_and2)

let result_and3 = true && false
console.log("Resultado AND V-F: " + result_and3)

let result_and4 = true && true
console.log("Resultado AND V-V: " + result_and4)

console.log("OR");
let result_or1 = false || false
console.log("Resultado AND F-F: " + result_or1)


let result_or2 = false || true
console.log("Resultado OR F-V: " + result_or2)

let result_or3 = true || false
console.log("Resultado OR V-F: " + result_or3)

let result_or4 = true || true
console.log("Resultado OR V-V: " + result_or4)

console.log("NOT");
let result_not = !true
console.log("Resultado NOT V: " + result_not)

let result_not2 = !false
console.log("Resultado NOT F: " + result_not2)


}
//Programa 6
function control(){
numAle=Math.random(1,10);
numAle2=Math.random(1,10);
console.log(numAle);
console.log(numAle2);
if(numAle>numAle2){
    prompt("El numero es mayor")
}else{
    prompt("El segundo valor es mayor que el primero")
}


}
//Programa 7
function adivinar(){
    let numMaquina=Math.floor(Math.random()*(10-1)+1);
console.log(numMaquina)

let numeroUser= parseInt(prompt("Adivina el numero"));

let vidas=3;
while(numMaquina != numeroUser && vidas >1){
    vidas--;
    if (numMaquina<numeroUser){
        numeroUser=parseInt(prompt("Intenta de nuevo el numero es menor, tienes "+vidas+" vidas"))
    }else{
    numeroUser=parseInt(prompt("Intenta de nuevo el numero es mayor, tienes "+vidas+" vidas"))
    }
}

if(numeroUser==numMaquina)
{
    prompt("Haz adivinado el numero era: "+numMaquina)
}else{
    prompt("Suerte para la otra")
}
}

while(true){
    
    //let num= parseInt(prompt('Ingresa un numero del 1 al 6'));
    let num = parseInt(prompt(`
    Elija una opción:
    1:Nombre
    2:Suma
    3:Compuertas
    4:Mayor,Menor
    5:Adivinar
    6:Cerrar`));
    if(num===1){
        nombre()
    }
    if(num===2){
        suma()
    }
    if(num===3){
        compuertas()
    }
    if(num===4){
        control()
    }
    if(num===5){
        adivinar()
    }
    if(num===6){
        break
    }

}

