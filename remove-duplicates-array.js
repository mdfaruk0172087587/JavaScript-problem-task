// const number = [0, 33, 8, 0, 7, 33, 7, 9];

function removeDuplicate(array) {
    let unique = [];
    for(let num of array){
        // console.log(!unique.includes(num))
        if(!unique.includes(num)){
            unique.push(num)
        }
    }
    // console.log(unique)
    return unique;
}

// console.log(removeDuplicate(number))