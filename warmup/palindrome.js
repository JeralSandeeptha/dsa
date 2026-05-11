function isPalindrome(text) {
    let isPalindrome;

    const reversedWord = text.toString().split("").reverse().join("");
    console.log(reversedWord);
    if (reversedWord === text) {
        isPalindrome = true;
        return isPalindrome;
    } else {
        isPalindrome = false;
        return isPalindrome;
    }
};

console.log(isPalindrome('wow')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false