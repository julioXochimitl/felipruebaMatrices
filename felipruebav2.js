var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José", ];
console.log(carreritas);


//Andrea adelanta a María
var aux = carreritas[2];
carreritas[2] = carreritas[4];
carreritas[4] = carreritas[3];
carreritas[3] = aux;

console.log(carreritas);

//José es descalificado de la carrera
carreritas.pop();
console.log(carreritas);

//Se clasifican 3 nuevos corredores
aux = carreritas[0];
carreritas.shift();
carreritas.unshift("Cristóbal");
carreritas.unshift("Fernanda");
carreritas.unshift("Armando");
carreritas.unshift(aux);

console.log(carreritas);

//Nuevo concurstante en el primer lugar
carreritas.unshift("Federico");

console.log(carreritas);

console.log("------------------------------------------------------------------------------------------------------------");

//Tabla final
carreritas.forEach(function(elemento, indice, array) {
    console.log(`${elemento} quedo en ${indice+1} lugar`);
})