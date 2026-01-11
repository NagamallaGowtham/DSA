// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;
}

let numbers = [1, 2, 1, 3, 2, 4, 5, 3, 5];

let result = singleNumber(numbers);

console.log(result);