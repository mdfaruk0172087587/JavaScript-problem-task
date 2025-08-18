
// const str = "amar sonal bangla ami tomai valo bashi";

function capitalizeWords(string) {
    // console.log(string.split(' '))
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++){
        // console.log(words[i][0].toUpperCase() + words[i].slice(1))
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    // console.log(words.join(' '))
    let result = words.join(" ");
    return result;
}

// console.log(capitalizeWords(str))