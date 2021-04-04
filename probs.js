//4/4/21

//Two versions of running sum. I: [1, 1, 1, 1, 1], O: [1, 2, 3, 4, 5]. I: [1, 3, 5, 7, 9], O: [1, 4, 8, 12, 16];

function runningSum(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        if(i===0) {
            arr.push(nums[i])
        } else {
            arr.push(nums[i] + arr[i - 1]);
        };
    };
    return arr;
}

function runningSum(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1]
    };
    return nums
};