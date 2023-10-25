'use strict';

// Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position
const fruits = ['🍎','🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);


//3.Looping over an array
//print all fruitsa
//a.for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b.for of
for(let fruit of fruits) {
    console.log(fruit);
}

//c.fruit
fruits.forEach( (fruit) => console.log(fruit));

//4.Addtion, deletion, copy
//push: add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);


const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//2.Searching
//find the indrx
console.log(fruits);
console.log(fruits.indexof('🍎'));
console.log(fruits.indexof('🍉'));
console.log(fruits.indexof('🥥'));

//includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

//lastIndexof
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexof('🍎'));
