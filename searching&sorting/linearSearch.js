var linearSearch = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array = [1, 5, 7, 3, 9, 2];

let result = linearSearch(array, 7);

console.log(result);