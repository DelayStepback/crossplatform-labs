function testFunc(x) {
    return x * x - Math.cos(x);
}

function integrateLeftRiemann(func, step) {
    let a = parseInt(prompt('Enter a: '));
    let b = parseInt(prompt('Enter b: '));
    let total = 0;
    for (let x = a; x < b; x += step) {
        total += func(x) * step;
    }
    return total;
}


const step = 0.01; // step

const result = integrateLeftRiemann(testFunc, step);
console.log(result); 
