"use strict";

a = 15;// в старом js можно было без объявления задавать переменные.
console.log(a);
// ust strict помогает выдавать ошибки там, где код устарел и не должен уже работать с ссовременными браузерами

//
let int = 5;
int=`name`;
console.log(int);
//

let obj = {
    a:50
};
const b = obj;//a22
console.log(b.a);
obj=undefined;
console.log(obj);
console.log(b);
//

console.log(name);
var name= 'obj';//undefined //Hoisting
//
{
    let result= 50;// var will work here/ let better not to cause errors
}

console.log(result);

//каждые 10 секунд в консоли пишет сколько стоит биткоин в юсдт
