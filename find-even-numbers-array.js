// const number = [1, 2, 3, 4, 5, 6,1, 4];

function findEven(array) {
    let evens = [];
    for(let num of array){
        if(num % 2 === 0){
            // console.log(num)
            evens.push(num)
        }
    }
    // console.log(evens)
    return evens;
}

// console.log(findEven(number))