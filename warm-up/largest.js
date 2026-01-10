var largest = function(nums) {
    let lar = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > lar) {
            lar = nums[i];
        }
    }

    return lar;
}

let numbers = [-212, -4, -33, -10, -9, -49, -34];

let result = largest(numbers);

console.log(result);