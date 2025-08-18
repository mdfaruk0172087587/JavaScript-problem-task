// const number = 5;

function findFactorial(n) {
    let factorial = 1;
    for(let i = 1; i <= n; i++){
       factorial *= i;
    }
    // console.log(factorial)
    return factorial;
}

// console.log(findFactorial(number))