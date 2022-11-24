// OBJECTS IN

const animal = {
  id: 42,
  name: "Neptune",
  type: "cat",
  numLegs: 4,
};

console.log("name" in animal);
// true

console.log("numEyes" in animal);
// false

console.log("cat" in animal);
// false
// (only looks for key, not value)
