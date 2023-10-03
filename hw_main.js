
// 1.) Write a function that takes a string and an array of strings ( in this example dog_names) and
// checks if one of the list members (dog names) is in the string . Return an array of the dog names
// found in the array

console.log(dog_names)
const dog_names = [max, pistachio, coco, spot];
console.log(dog_names.includes('max')); //true
console.log(dog_names.includes('spot')); //true
console.log(dog_names.includes('fluffy')); //false


// 2.) Write a function using a for loop to convert an array of numbers from inches to feet.

var myNumber = [66,64,60,52,72,80,51]
console.log(Math.floor(66/12))
console.log(Math.floor(64/12))
console.log(Math.floor(60/12))
console.log(Math.floor(52/12))
console.log(Math.floor(72/12))
console.log(Math.floor(80/12))
console.log(Math.floor(51/12))

// 3.) Using a for loop (or for extra challenge the Ternary Operator and Map), create an array that
// adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being
// rude’ to any other name

let tmnt = ("Leonardo", "Michelangelo", "Donatello", "Raphael");
let updateTmnt = updateTmnt.filter(name => name.endsWith('o')).map(name => name.endsWith('o') ? + `is eating pizza` : + `is being rude`);

// 4.) Write an arrow function to find the max number in a list. Do not use the Math.max function.
// The list will be all positive numbers.
var findAMax=[123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]
const findMax = (Array) => {
    let max = Array[0];
    Array.forEach((num) => {
        if (num > max) {
            max = num;
        }
    });
    return max;
};

// 5.) https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
//Create a method to see whether the string is ALL CAPS.
// this fuction should show whether its true or false
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}


// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
//Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / mpg <= fuelLeft) {
      return true
    }
    else {
      return false
    }
  };


// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//It's pretty straightforward. Your goal is to create a function that removes the
// first and last characters of a string. You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1);
   
};
