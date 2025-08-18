// Palindrome is a word, number, sentence, or sequence that reads the same forwards and backwards.

// const name = 'laval';

function isPalindrome(string) {
    let reveres = "";
    for(let i = string.length -1; i >=0; i--){
        // console.log(string[i])
        reveres += string[i];
    }
    // console.log(reveres, string)
    const palindrome = reveres === string;
   return palindrome;
}

// console.log(isPalindrome(name))