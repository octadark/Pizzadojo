function pizzaOven(tipoCorteza, tipoSalsas, quesos ,salsas){
    var pizza ={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsas = tipoSalsas;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
var p1 = pizzaOven("estilo Chicago", "tradicional",["mozzarella"],["pepperoni", "salchicha"])
console.log(p1);

function pizzaOven(tipoCorteza, tipoSalsas, quesos ,toppings){
    var pizza ={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsas = tipoSalsas;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    return pizza;
}
var p2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"])
console.log(p2);

var tipoCorteza = [
    "cortesa tostada",
    "gluten libre",
    "harina integral",
];

var tipoSalsas = [
    "Pesto",
    "Camarones",
    "Tartara",
    "Perejil",
];
var quesos = [
    "Gauda",
    "vegano",
    "Parmessano",
    "Suizo",
    "Ranco",
];
var toppings = [
    "salchichas",
    "champiñones",
    "peperoni",

];

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsas = randomPick(tipoSalsas);
    pizza.quesos = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.quesos.push(randomPick(quesos));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());