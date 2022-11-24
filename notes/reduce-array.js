const nums = [5, 10, 15, 20, 25, 30, 35];

const reduced = nums.reduce((result, num) => {
    console.log(result, num);
    result.push(num);

    return result;
}, []);

console.log(reduced);
// [] 5
// [ 5 ] 10
// [ 5, 10 ] 15
// [ 5, 10, 15 ] 20
// [ 5, 10, 15, 20 ] 25
// [ 5, 10, 15, 20, 25 ] 30
// [ 5, 10, 15, 20, 25, 30 ] 35

// [
//    5, 10, 15, 20,
//   25, 30, 35
// ]