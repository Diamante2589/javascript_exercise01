/*
let height=prompt("ingrese su péso");
let weight=prompt("ingrese tu pesos");
let bodyMass= height*weight;

console.log(bodyMass);

*/

//se crea las variables
let weight;
let height;
let  bodyMass;

//se crea un objeto person 
const person = {
    weight:prompt("ingrese su péso en kilos"),
    height:prompt("ingrese tu peso en metros"),
};

//se crea un console.log que me muestre el peso de la persona y la altuta

console.log( "el indice de masa corporal es " + person.weight / (person.height*person.height));

//se crea un document.write que muestra el peso y la altura
document.write("el indice de masa corporal es " + person.weight / (person.height*person.height));




