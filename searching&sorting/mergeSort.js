var mergeSort = function(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

var merge = function(left, right) {
    let result = [];

    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

let array = [10, 5, 20, 4, 6, 1, 9];

let result = mergeSort(array);

console.log(result);