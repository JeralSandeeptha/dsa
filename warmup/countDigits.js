function countDigits(number) { 
    if (typeof(number) === 'string') { 
        throw Error("Please enter numbers");
    }
    const array = number.toString().split("");
    return array.length;
};

console.log(countDigits(12345));
