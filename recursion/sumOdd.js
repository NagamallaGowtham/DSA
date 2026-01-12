// Sum of all odd elements in an Array 

function sum(n) {
    if (n == 0) {
        if (arr[0] % 2 !== 0) {
            return arr[0];
        } else {
            return 0;
        }
    }

    if (arr[n] % 2 !== 0) {
        return arr[n] + sum(n - 1);
    } else {
        return sum(n - 1);
    }
}

let arr = [10, 3, 2, 4, 6, 7, 9];

console.log(sum(arr.length - 1));