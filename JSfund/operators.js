"use strict"

console.log('arr' + "-object");//arr-object
console.log(4 + "-object"); // 4-object
// конкретинация
console.log(4 + "5"); // 4+5=9

//префиксная и постфиксная форма записи
let incr = 10,
    decr = 10;

console.log(incr++);
console.log (decr--);
// сначала возвращается 10, потом +-
let incr = 10,
    decr = 10;

console.log(++incr);
console.log (--decr);
// сразу выводится с + -

console.log (5%2);/// =1

console.log (2*4 == '8');// true тк сравнение только по значению
console.log(2*4 ==='8');//false сравнение и по значению и по типу данных
 
&&// оба условия должны быть true
||// хотя бы одно

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

