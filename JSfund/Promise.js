"use strict"

// console.log('zapros');

// setTimeout (() => {
//     console.log('podgotovka dannix');
    
//     const product ={
//         name: 'tv',
//         price: '2000'
//     };

//     setTimeout(()=>{
//        product.status = 'ordered';
//         console.log(product);
//     }, 2000);
// }, 2000);// callback hell
// ==================


"use strict"

console.log('zapros');

const req = new Promise(function(resolve,reject){
    setTimeout (() => {
        console.log('podgotovka dannix');
        
        const product ={
            name: 'tv',
            price: '2000'
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
    
}).then(data=>{
    console.log(data);
}).finally(()=>{
    console.log('finally');
});
///////////////////////////////////////////////////////////////
"use strict"

console.log('zapros');

const req = new Promise(function(resolve,reject){
    setTimeout (() => {
        console.log('podgotovka dannix');
        
        const product ={
            name: 'tv',
            price: '2000'
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered';
            reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
    
}).then(data=>{
    console.log(data);
}).catch(()=>{
console.error('oshibka');
}); 
///////////////////////////////////

const test = time => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(), time);
    });
};
    // test(1000).then(()=>console.log('1000ms'));
    // test(2000).then(()=>console.log('2000ms'));


    // Promise.all([test(1000), test(2000)]).then(() => {
    //     console.log('All');
    // });

    Promise.race([test(1000), test(2000)]).then(() => {
        console.log('All');
    }); 
