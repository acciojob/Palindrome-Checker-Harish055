// complete the given function

function palindrome(str){
    const len=str.length;
    for (let i=0;i<len/2;i++){
        if(str[i !==str[len-1-i]]){
            return "true";
        }
    }
    return "false";
}
let str="racecar";
palindrome(str);
module.exports = palindrome
