var binarySearch = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(right >= left) {
        let middle = Math.floor((left + right) / 2);

        if (target === arr[middle]) {
            return middle;
        } else if (target > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

let array = [-1, 0, 3, 5, 9, 10];

let result = binarySearch(array, 9);

console.log(result);