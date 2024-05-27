
const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

let myName = "Sujit"
console.log(Array.isArray(myName));

myName = Array.from(myName);
console.log(myName);
console.log(Array.isArray(myName));
