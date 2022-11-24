// OBJECTS DELETE

const animal = {
  id: 42,
  name: "Neptune",
  type: "cat",
  numLegs: 4,
};

delete animal.type;
console.log(animal);
// { id: 42, name: 'Neptune', numLegs: 4 }

delete animal["id"];
console.log(animal);
// { name: 'Neptune', numLegs: 4 }
