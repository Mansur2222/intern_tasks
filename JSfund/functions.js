"use strict"
let num = 20;//глобальная перменная, которую мы перезапишем в теле функции

function showFirstMessage(text) {
    console.log(text);
    num = 10;//локальная переменная обьявленная внутри функции переменная доступна ток внутри функции
}

showFirstMessage("Hello World");
console.log(num);// =10

function calc (a, b){
    return (a+b);
    console.log()// unreacheble code
}

console.log(calc(4, 3));
console.log(calc(190, 5));

function ret(){
    let num = 50;

    ///// любой код или логика

    return num;
}

const anotherNum = ret();// записываем результат в константу 
console.log(anotherNum);

const calc= (a, b) => {
    return a + b
};
// если фукнция умещается в 1 строчку
const calc= (a, b) => {a + b};

//////////////////////////////////////////////

let array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]


let array = [1, 2, 3];
let lastElement = array.pop();
console.log(array); // [1, 2]
console.log(lastElement); // 3


let array = [1, 2, 3];
let newArray = array.map(num => num * 2);
console.log(newArray); // [2, 4, 6]


let array = [1, 2, 3, 4, 5];
let newArray = array.filter(num => num % 2 === 0);
console.log(newArray); // [2, 4]


let str = 'Hello, World!';
let newStr = str.slice(0, 5);
console.log(newStr); // 'Hello'


let str = 'Hello, World!';
let newStr = str.toUpperCase();
console.log(newStr); // 'HELLO, WORLD!'


let str = 'Hello, World!';
let newStr = str.toLowerCase();
console.log(newStr); // 'hello, world!'


let str = 'Hello, World!';
let array = str.split(' ');
console.log(array); // ['Hello,', 'World!']


let obj = { a: 1, b: 2, c: 3 };
let keys = Object.keys(obj);
console.log(keys); // ['a', 'b', 'c']

let obj = { a: 1, b: 2, c: 3 };
let values = Object.values(obj);
console.log(values); // [1, 2, 3]


let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolved'), 1000);
});

promise.then(value => console.log(value)); // 'Promise resolved'


async function asyncFunc() {
    let response = await fetch('https://api.github.com/users');
    let users = await response.json();
    console.log(users);
}

asyncFunc();


function asyncFunc() async {
    let response = await fetch('https://api.github.com/users');
    let users = await response.json();
    console.log(users);
}

asyncFunc();



