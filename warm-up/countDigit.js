// Write a function that returns the count of digits in a number

function countDigit(n) {
    if (n == 0) return 1; // corner case

    n = Math.abs(n);   // corner case - if number is negative

    let count = 0;
    
    while(n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let num = 143;

let result = countDigit(num);

console.log(result);