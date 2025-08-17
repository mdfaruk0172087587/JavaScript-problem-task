// const name = 'faruksiponSAA';

function countVowels(string) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of string){
        // console.log(char)
        if(vowels.includes(char)){
            count++;
        }
    }
    // console.log(count)
    return count;
}

// console.log(countVowels(name))