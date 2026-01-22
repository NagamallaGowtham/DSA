// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxVal = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        } else {
            maxVal = Math.max(count, maxVal);
            count = 0;
        }
    }

    return Math.max(count, maxVal);
}

let numbers = [1, 1, 0, 1, 0, 0, 1, 1, 1, 0];

let result = findMaxConsecutiveOnes(numbers);

console.log(result);