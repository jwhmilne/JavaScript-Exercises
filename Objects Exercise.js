/* OBJECT EXERCISES */

/*
Warm-up
    1. Create an object called "mexico" with the following properties:
        - id → 24
        - name → "Mexico"
        - capital → "Mexico City"
        - neighbours → ["USA", "Guatemala", "Belize"]

    2. Print out "mexico" to the terminal

    3. Change "id" to be 25

    4. Add "Honduras" to the list of neighbours to "mexico"

    5. Print out "mexico" to the terminal again
*/

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);
// {
//     id: 24,
//     name: 'Mexico',
//     capital: 'Mexico City',
//     neighbours: [ 'USA', 'Guatemala', 'Belize' ]
//   }

mexico.id = 25;
mexico.neighbours.push("Honduras");

console.log(mexico);
// {
//     id: 25,
//     name: 'Mexico',
//     capital: 'Mexico City',
//     neighbours: [ 'USA', 'Guatemala', 'Belize', 'Honduras' ]
//   }

///

/*
Problem Set 1
    1. Create an object called "myPet" with the following properties:
        - name → "Sudo"
        - type → "Dog"
        - breed → "Poodle"
        - age → 7
        - friends → ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new property: colour → "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"

    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/
const myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);
// {
//     name: 'Sudo',
//     type: 'Dog',
//     breed: 'Poodle',
//     age: 7,
//     friends: [ 'Bit', 'Byte', 'Data' ]
//   }

myPet.color = "Black";
myPet.breed = "Beagle";
myPet.friends.pop();
myPet.friends.push("Chip");

console.log(myPet);
// {
//     name: 'Sudo',
//     type: 'Dog',
//     breed: 'Beagle',
//     age: 7,
//     friends: [ 'Bit', 'Byte', 'Chip' ],
//     color: 'Black'
//   }

///

/*
Problem Set 2
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create an object called "store" with the following properties:
        - storeNumber → 5
        - locationCity → "Milan"
        - locationCountry → "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal"

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store object to be 1.75

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/

const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store);
// {
//   storeNumber: 5,
//   locationCity: 'Milan',
//   locationCountry: 'Italy',
//   products: [
//     { name: 'banana', quantity: 1, price: 1.95 },
//     { name: 'apple', quantity: 1, price: 1.45 },
//     { name: 'candy', quantity: 1, price: 3.5 }
//   ]
// }

console.log(store.products);
// [
//   { name: 'banana', quantity: 1, price: 1.95 },
//   { name: 'apple', quantity: 1, price: 1.45 },
//   { name: 'candy', quantity: 1, price: 3.5 }
// ]

console.log(store.products[2]);
// { name: 'candy', quantity: 1, price: 3.5 }

store.products[0].price = 1.75;

console.log(store);
// {
//   storeNumber: 5,
//   locationCity: 'Milan',
//   locationCountry: 'Italy',
//   products: [
//     { name: 'banana', quantity: 1, price: 1.75 },
//     { name: 'apple', quantity: 1, price: 1.45 },
//     { name: 'candy', quantity: 1, price: 3.5 }
//   ]
// }

console.log(banana);
// { name: 'banana', quantity: 1, price: 1.75 }

candy.price = 4.99;

console.log(store);

console.log(candy);
