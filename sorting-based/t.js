var majorityElement = function(nums) {
    return nums.sort((a,b)=>a-b)[Math.floor(nums.length/2)]
};
// console.log(majorityElement([2,2,1,1,1,2,2]))
