const cb = (resolve, reject) => {
    resolve('Hello world');
}

const myPromise = new Promise(cb);
myPromise.then(value => console.log(value))
console.log(myPromise);

const getSpecificNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 2000);
    })
}

const myAsyncFun = async () => {
    try {
        const result = await getSpecificNumber();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myAsyncFun();