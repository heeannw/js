function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

function showMessage(message, form = 'unkown') {
    console.log('${message} by ${form}'); 
}
showMessage('Hi!');

function printAll(...args) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding' , 'ellie');

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(messsage);
        let childmessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();

function sum(a, b) {
    return a+b;
}
const result=sum(1, 2);
console.log('sum: ${sum(1, 2)}');


function upgradeuser(user) {
    if(user.point > 10) {
        return;
    }
}

function  upgradeuser(user) {
    if (user.point <= 10) {
        return;
    }
}
