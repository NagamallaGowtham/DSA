// Move Zeroes 

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


var moveZeroes = function(nums) {
    let p = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p] = nums[i];
            p++;
        }
    }

    for (let i = p; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};

console.log(moveZeroes([1, 1, 0, 3, 0, 0, 12]));