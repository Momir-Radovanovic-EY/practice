function calculateSquare(number, callback) {
    console.log('1');
    setTimeout(function () {
        console.log('4');
        if (typeof number !== 'number') {
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    }, 1000);
    console.log('2');
}

try {
    calculateSquare(2, function (result) {
        console.log('5');
        console.log(result);
    })
} catch (error) {
    console.log('Caught error: ' + String(error));
}

console.log('3');