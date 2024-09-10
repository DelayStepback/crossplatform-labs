function testFunc(x) {
    return x * x - Math.cos(x);
}

function integrateLeftRiemann(func) {
    let a = parseInt(prompt('Enter a: '));
    let b = parseInt(prompt('Enter b: '));

    let accuracy = 0.01;
    let lastVal = -1000;
    let currVal = 0;

    let steps = 2;

    // first iteration
    let total = 0;
    let stepSize = (b - a) / steps;


    for (let i = 0; i < steps; i += 1) {
        total += func(a + i*stepSize) * stepSize;
    }
    currVal = total;

    steps = steps * 2;

    while (Math.abs(lastVal - currVal) > accuracy) {

        total = 0;
        stepSize = (b - a) / steps;
        

        for (let i = 0; i < steps; i += 1) {
            total += func(a + i*stepSize) * stepSize;
        }
        lastVal = currVal;
        currVal = total;

        steps = steps * 2;

    }


    return currVal;
}


let result = integrateLeftRiemann(testFunc);
console.log(result); 
