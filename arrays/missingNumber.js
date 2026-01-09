// Missing Number 

// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    let len = nums.length;
    let maxSum = len * (len + 1) / 2;

    let actualSum = 0;
    for (let i = 0; i < len; i++) {
        actualSum += nums[i];
    }

    return maxSum - actualSum;
}

let numbers = [0, 1, 2, 4];

let result = missingNumber(numbers);

console.log(result);