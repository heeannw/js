console. log ('my'+'cat');
console. log ('1'+2);
console. log('string literals: 1 + 2 = ${1 + 2}');

console. log("ellie's \n\tbook");


console. log(1+1);
console. log(1-1);
console. log(1/1);
console. log(1*1);
console. log(5%2);
console. log(2**3);

console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

const value1 = false;
const value2 = 4 < 2;

console.log('or: ${value1 || value2 || check()}');

function check() {
    for (let i = 0; i < 10; i++) {
        console.log(' 😱 ');
    }
    return true;
}

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive );
console.log(stringFive != numberFive );

console.log(stringFive === numberFive );
console.log(stringFive !== numberFive );