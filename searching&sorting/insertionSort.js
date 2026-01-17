var insertionSort = function(nums) {
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        let cur = nums[i];
        let prev = i - 1;

        while(nums[prev] > cur && prev >= 0) {
            nums[prev+1] = nums[prev];
            prev--;
        }

        nums[prev+1] = cur;
    }

    return nums;
}

let array = [20, 5, 9, 16, 4, 6, 3, 10, 2];

let result = insertionSort(array);

console.log(result);