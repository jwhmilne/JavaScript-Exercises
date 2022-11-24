// OBJECTS INTRO

const animal = {
  id: 42,
  name: "Neptune",
  type: "cat",
  numLegs: 4,
};
console.log(animal);
// { id: 42, name: 'Neptune', type: 'cat', numLegs: 4 }

animal["name"] = "Neptunino";
console.log(animal);
// { id: 42, name: 'Neptunino', type: 'cat', numLegs: 4 }

animal.type = "Kitten";
console.log(animal);
// { id: 42, name: 'Neptunino', type: 'Kitten', numLegs: 4 }
