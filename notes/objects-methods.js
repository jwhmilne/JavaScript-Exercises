// OBJECTS METHODS

const animal = {
  id: 42,
  name: "Neptune",
  type: "cat",
  numLegs: 4,
};

console.log(Object.keys(animal));
// [ 'id', 'name', 'type', 'numLegs' ]

console.log(Object.values(animal));
// [ 42, 'Neptune', 'cat', 4 ]

console.log(Object.entries(animal));
// [
//     [ 'id', 42 ],
//     [ 'name', 'Neptune' ],
//     [ 'type', 'cat' ],
//     [ 'numLegs', 4 ]
//   ]
