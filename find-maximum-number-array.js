// const number = [33, 0, 6, 2, 5, 9, 3, 19];

function maxNumber(array) {
    let max = [0];
   for(let num of array){
    // console.log(num)
    if(num > max){
        max = num;
    }
   }
//    console.log(max)
return max;
}

// console.log(maxNumber(number))