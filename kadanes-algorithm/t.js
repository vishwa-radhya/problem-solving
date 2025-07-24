// this algorithm is used to efficiently solve the maximum sub-array problem
//the brute approach can be used by checking all the possibe subarrays and updating the max one but takes O(n^2) 
// but it ensures it can be solved with O(n) tc
// has only two opearions 
// 1. expand subarray
// 2. start with a new sub-array
/**
 * 4 scenarios
 * when subarray sum and the current element is checked
 * if 1. sum is +ve and current is +ve "extend" 
 * if 1. sum is -ve and current is +ve "new" 
 * if 1. sum is +ve and current is -ve "extend" 
 * if 1. sum is -ve and current is -ve "new" 
 */

function maximum_subarray(nums){
    let curSum=nums[0]
    let maxSum=nums[0]
    for(let i=1;i<nums.length;i++){
        curSum = Math.max(nums[i],curSum+nums[i])
        maxSum = Math.max(maxSum,curSum)
    }
    return maxSum
    //2ms with 72.56% beat
    // the 0ms works the same without using any in-built methods
    // let currSum = 0
    // let maxSum = nums[0]
    // for(let i=0; i<nums.length; i++){
    //     currSum += nums[i]
    //     if(currSum > maxSum) maxSum = currSum
    //     if(currSum < 0) currSum = 0
    // }
    // return maxSum
}
// console.log(maximum_subarray([-2,1,-3,4,-1,2,1,-5,4])) //6
// console.log(maximum_subarray([1])) //1
// console.log(maximum_subarray([1,-2,3,-2])) //1