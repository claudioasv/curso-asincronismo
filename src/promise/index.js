// Estados de una promesa
// 1. Pendiente
// 2. Cumplido
// 3. Rechazada

const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
});

const cows = 10;

const countCows = new Promise(function (resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject(`There is no cows on the farm`);
    }
});

countCows.then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Finally");
})

