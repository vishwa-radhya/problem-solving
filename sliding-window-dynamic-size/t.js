function longest_substring_without_repeating_characters(s){
    let set = new Set()
    let left=0
    let maxLen=0;
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLen = Math.max(maxLen,((right-left)+1))
    }
    return maxLen
    //5ms tc with 80% beat
}
// console.log(longest_substring_without_repeating_characters('abcabcbb'))
// console.log(longest_substring_without_repeating_characters('bbbbb'))
// console.log(longest_substring_without_repeating_characters('pwwkew'))
// console.log(longest_substring_without_repeating_characters('tmmzuxt'))
function minimum_size_subarray_sum(target,nums){
    // let sum=0
    // let minSubArrayLength=Infinity
    // for(let left=0;left<nums.length;left++){
    //     let right=left
    //     while(right<nums.length && sum<target){
    //         sum+=nums[right]
    //         right++
    //     }
    //     if(sum>=target){
    //         minSubArrayLength = Math.min(minSubArrayLength,(right-left))
    //     }
    //     sum=0
    // }
    // return minSubArrayLength !== Infinity ? minSubArrayLength : 0
    //works but due to O(n^2) tc got tle at 19/21
    // let sum=0
    // let minSubArrayLength=Infinity
    // let left=0
    // let right=0
    // while(sum<target && right<nums.length){
    //     sum+=nums[right]
    //     right++
    // }
    // if(right==nums.length && sum<target) return 0
    // minSubArrayLength = Math.min(minSubArrayLength,(right-left))
    // for(let i=right;i<nums.length;i++){
    //     sum+=nums[i]
    //     right++
    //     while(sum>=target && left<right){
    //             sum-=nums[left]
    //             left++
    //     }
    //     minSubArrayLength=Math.min(minSubArrayLength,(right-left+1))
    // }
    // while(sum>=target && left<right){
    //         sum-=nums[left]
    //         left++
    // }
    // minSubArrayLength=Math.min(minSubArrayLength,(right-left+1))
    // return minSubArrayLength
    // 5ms with 15.84% beat
    // let sum=0
    // let minSubArrayLength=Infinity
    // let left=0
    // let right=0
    // while(sum<target && right<nums.length){
    //     sum+=nums[right]
    //     right++
    // }
    // if(right==nums.length && sum<target) return 0
    // minSubArrayLength = Math.min(minSubArrayLength,(right-left))
    // while((sum>=target && left<right) || right<nums.length){
    //     if(right<nums.length){
    //         sum+=nums[right]
    //         right++
    //     }
    //     while(sum>=target && left<right){
    //             sum-=nums[left]
    //             left++
    //     }
    //     minSubArrayLength=Math.min(minSubArrayLength,(right-left+1))
    // }
    // return minSubArrayLength
    //same tc with same beat
    // the 3ms tc sol
    let l = 0;
    let min = Infinity;
    let sum = 0;
    for(let r=0; r<nums.length; r++){
        sum += nums[r]
        while(sum >= target){
            min = Math.min(min, r-l+1)
            sum -= nums[l];
            l++;
        }
    }
    return min == Infinity ? 0 : min 
    //also the final upbeat 0ms tc uses same approach
}
// console.log(minimum_size_subarray_sum(7,[2,3,1,2,4,3])) //2
// console.log(minimum_size_subarray_sum(4,[1,4,4])) //1
// console.log(minimum_size_subarray_sum(11,[1,1,1,1,1,1,1,1])) //0
// console.log(minimum_size_subarray_sum(11,[1,2,3,4,5])) //3

function max_consecutive_ones_III(nums,k){
    let overallZeroCount=0
    for(let num of nums) if(num == 0) overallZeroCount++
    if(overallZeroCount == 0) return nums.length
    if(overallZeroCount == nums.length) return 0
    
}
console.log(max_consecutive_ones_III([1,1,1,0,0,0,1,1,1,1,0],2))
console.log(max_consecutive_ones_III([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))