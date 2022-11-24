const cities = ["madrid", "vancouver", "mumbai"," new york", "lima"];

const mCities = cities.filter((city) => {
    return city.startsWith("m");
    // .startsWith is an inbuilt method
})

// const mCities = cities.filter(cities => cities.startsWith("m"));
// shorter version of the above

console.log(cities);
// [ 'madrid', 'vancouver', 'mumbai', ' new york', 'lima' ]

console.log(mCities);
// [ 'madrid', 'mumbai' ]

// ---

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// ---

const nums = [5, 6, 7, 8, 9, 10];

const evenNums = nums.filter((num) => {
    if (num % 2 === 0) {
        return true;
    }
    return false;
})

// const evenNums = nums.filter(nums => nums % 2 === 0);
// shorter version of the above

console.log(nums);
// [ 5, 6, 7, 8, 9, 10 ]

console.log(evenNums);
// [ 6, 8, 10 ]

// ---

const newNums = [5, 6, 7, 8, 9, 10];

const oddNumbers = newNums.filter((num) => {
    if (num % 2 === 1) {
        return true;
    }
});

// const oddNumbers = newNums.filter(num => (num % 2) === 1);
// shorter version of the above

console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

console.log(oddNumbers);
// [ 5, 7, 9 ]