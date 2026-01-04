// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


var reverse = function(x) {
    let xCopy = x;
    let rev = 0;

    x = Math.abs(x);

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    let limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit) return 0;

    return (xCopy < 0) ? -rev : rev;
};

let num = 1234;

console.log(reverse(num));