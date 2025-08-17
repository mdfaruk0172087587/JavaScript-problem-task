// const name = 'faruk';
function reverseString (string) {
    let reverse = '';
   for(let i = string.length -1; i>=0; i--){
    // console.log(i)
    reverse += string[i];
    // console.log(reverse)
   }
   return reverse;
}
// console.log(reverseString(name))