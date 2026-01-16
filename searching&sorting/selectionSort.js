var selectionSort = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        }
    }

    return nums;
}

let array = [6, 9, 4, 10, 2, 8, 1, 12, 3];

let result = selectionSort(array);

console.log(result);