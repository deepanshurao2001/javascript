const marvel_heros = ["thor","IronMan","spriderMan"]
const dc_Heros = ["superman","BatMan","Flash"]

const allHero = marvel_heros.concat(dc_Heros)
console.log(allHero);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_Heros]

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray([1,2,3,4,5]));

console.log(Array.isArray("Deepanshu"));

console.log(Array.from("Deepanshu"));

console.log(Array.from({name: "Deepanshu"})); 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));