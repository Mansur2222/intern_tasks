"use strict"

const num = 50;

while (num<55){
    console.log(num);
    num++;
}

//////
let numb = 50;

do {
    console.log(numb);
    numb++;
}
while(numb<55);

/////////////
for (let i = 1; i<8; i++) {
    console.log(i)
}
/// не допускать бесконечных циклов 

for (let i = 1; i<8; i++) {
    if(i===6) {
        //break;
        continue;// пропускает не нужный шаг, например четную цифру
    }

    console.log(i)
}