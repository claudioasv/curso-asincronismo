const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Async!!'), 3000)
        : reject(new Error("error"));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
}

console.log('Before');
anotherFn();
console.log('After');