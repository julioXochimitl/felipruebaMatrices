var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);

//Andrea adelanta a María

console.log(`${carreritas[0]}, ${carreritas[1]}, ${carreritas[4]}, ${carreritas[2]}, ${carreritas[3]}, ${carreritas[5]}`);

//José es descalificado de la carrera
console.log(`${carreritas[0]}, ${carreritas[1]}, ${carreritas[4]}, ${carreritas[2]}, ${carreritas[3]}`);

//Se clasifican 3 nuevos corredores

carreritas.push("Cristóbal");
carreritas.push("Fernanda");
carreritas.push("Armando");

console.log(`${carreritas[0]}, ${carreritas[6]}, ${carreritas[7]}, ${carreritas[8]}, ${carreritas[1]}, ${carreritas[4]}, ${carreritas[2]}, ${carreritas[3]}`);

//Nuevo concurstante en el primer lugar
carreritas.push("Federico");

console.log(`${carreritas[9]}, ${carreritas[0]}, ${carreritas[6]}, ${carreritas[7]}, ${carreritas[8]}, ${carreritas[1]}, ${carreritas[4]}, ${carreritas[2]}, ${carreritas[3]}`);