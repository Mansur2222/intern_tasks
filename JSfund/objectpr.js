"use strict"
/////////////////////////Destructuring (Деструктуризация)
onst obj = { a: 1, b: 2, c: 3 };
const { a, b, c } = obj;
console.log(a, b, c); // 1 2 3

/////////////////Spread Syntax (Синтаксис расширения)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

//////////////////Object.freeze() и Object.seal()
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // не работает, obj все еще { a: 1 }

/////////////////////Object.getOwnPropertyNames() и Object.keys()
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c' ]

/////////////////////////Создание объектов через конструкторы и прототипы
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}
const john = new Person('John', 22);
john.greet(); // Hello, my name is John and I'm 30 years old.

/////////////////////////Использование Map и Set
const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1

const set = new Set();
set.add(1);
set.add(2);
set.add(1); // не добавится, так как 1 уже есть в сете
console.log(set); // Set { 1, 2 }

//////////////////////////////////////Использование Proxy

let handler = {
    get: function(target, key) {
        if (key in target) {
            return target[key];
        } else {
            return 'Key does not exist';
        }
    }
};

let p = new Proxy({}, handler);
p.a = 1;

console.log(p.a); // 1
console.log(p.b); // Key does not exist


