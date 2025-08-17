// const number = [1, 2, 3, 4, 10, 5];

function sumArray(array) {
    let sum = 0;
    for(let num of array){
        // console.log(num)
        sum += num;
    }
    // console.log(sum)
    return sum;
}

// console.log(sumArray(number))