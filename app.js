//function-1 slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);


//function-2 splice
modifiedFood = foods.slice();
modifiedFood.splice(2, 0, "noodles", "icecream");
console.log(modifiedFood);


//function-3 
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(numberArray) {
    return numberArray.filter(number => number % 2 == 0);
}
console.log("Even Numbers in the array", isEven(numberArray));

//prime
function isPrime(numberArray) {
    var count = 0;
    var data = [];
    for (let i = 0; i < numberArray.length; i++) {
        count = 0;
        for (let j = 1; j <= numberArray[i]; j++) {
            if (numberArray[i] % j == 0) {
                count++;
            }
        }
        if (count == 2) { data.push(numberArray[i]); }

    }
    return data;
}
console.log("Prime Numbers", isPrime(numberArray));


//function - 4
function nonPrime(numberArray) {
    var data = isPrime(numberArray);
    for (let j = 0; j < data.length; j++) {
        let value = numberArray.indexOf(data[j])
        if (value == -1) {
            numberArray.slice(value, 1);
        }
    }
    return numberArray;
}
console.log("Non-Prime Numbers", nonPrime(numberArray));

//function-5 [lamnda functions]
var evenNumbers = function (data) { return data.filter(value => value % 2 == 0) }
console.log("Even Numbers", evenNumbers([2, 4, 1, 3]));

//function-6 map function
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
    return myArray.map(function (item, index, myArray) { return item * item; });
}
console.log("Square of numbers in array", findSquareOfNumbers(myArray));


//function-7[],reduce
const mArray = [2, 3, 5, 10];
function multiply(mArray) {
    return mArray.reduce((accumulator, currentValue) => { return accumulator * currentValue; });
}
console.log("multiplication of values", multiply(mArray));