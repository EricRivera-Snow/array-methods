// const names = ["john","james","mark","luke"];
// console.log(names)

// names.push("jack");

// console.log(names);

// const lastInList = names.pop();
// console.log(lastInList);
// console.log(names);

const foods = ["hamburgers", "fried rice", "enchiladas", "fried chicken"];

foods.forEach((food, index) => {
  console.log(`I love ${food}${index === foods.length - 1 ? "." : ","}`);
  console.log(index);
});

/** Questions to ask when you are using array methods
 * 1. Does this method MUTATE the array on which it is called?
 * 2. Does the method return a value? If so, what is it?
 *
 * For forEach(), the answer to (1) is NO. The answer to (2) is NO.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map((number) => {
  return number * 2;
});

console.log(doubles);
console.log(numbers);

const names = ["john", "Kevin", "jill", "bob", "MIKE"];

const formattedNames = names.map((person) => {
  return person[0].toUpperCase() + person.slice(1).toLowerCase();
});

console.log(formattedNames);

const personName = "MIKE smith";

function formatName(names) {
  return name[0].toUpperCase + name.slice(1).toLowerCase();
}

//**.map( does NOT mutate the original array
// it DOES return a value, namely a new array with values returned in the callback passed to .map() */

// console.log(
//   numbers.reduce((accumulator, number) => {
//     return (accumulator += number);
//   }, 100)
// );

// number.reduce((total, current) => {

// }, 100);

const nums2 = [3, 10, 50];
const total = nums2.reduce((total, currentNumber) => {
  return (total += currentNumber);
}, 0);
console.log(total);
