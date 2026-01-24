let array = [54, 10, 55, 17, 99, 2, 99];

function secondLargest(arr) {
    let first = -Infinity; // 10, 55
    let second = -Infinity; // -i, 10

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    return second;
}

let result = secondLargest(array);

console.log(result);