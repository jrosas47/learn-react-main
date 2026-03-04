/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squaredNums = nums.map(num => num * num);
console.log(squaredNums); // [1, 4, 9, 16, 25]

const squaredNums2 = nums.map(function(num) {
    return num * num;
});
console.log(squaredNums2); // [1, 4, 9, 16, 25]

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedNames); // ["Alice", "Bob", "Charlie", "Danielle"]
const capitalizedNames2 = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
});
console.log(capitalizedNames2); // ["Alice", "Bob", "Charlie", "Danielle"]


/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
const wrappedPokemon = pokemon.map(poke => `<p>${poke}</p>`);
console.log(wrappedPokemon); // ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
const wrappedPokemon2 = pokemon.map(function(poke) {
    return `<p>${poke}</p>`;
});
console.log(wrappedPokemon2); // ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

