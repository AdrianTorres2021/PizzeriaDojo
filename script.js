function pizzaOven(estilo , corteza, salsa, queso, condimento){
    var pizza = {};
    pizza.estilo = estilo;
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.queso = queso;
    pizza.condimento = condimento;
    return pizza;
}

var pizza1 = pizzaOven("estilo chicago", "tradicional", "tomate", "mozarella", ["pepperoni", "salchicha"] );
var pizza2 = pizzaOven("lanzada a mano", "marinara", "tomate", ["mozarella", "feta"], ["champiñones", "aceitunas"]);
console.log(pizza1, pizza2);