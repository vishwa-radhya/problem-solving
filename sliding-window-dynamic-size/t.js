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
    // let overallZeroCount=0
    // for(let num of nums) if(num == 0) overallZeroCount++
    // if(overallZeroCount == 0) return nums.length
    // if(nums.length==1 && k==1) return 1
    // if(overallZeroCount == nums.length) return 0
    // if(k == nums.length) return nums.length
    // if(k==0){
    //     let onesCount=0
    //     let maxOnesCount=0
    //     for(let num of nums){
    //         if(num ==0){
    //             console.log(onesCount,maxOnesCount)
    //             maxOnesCount = Math.max(maxOnesCount,onesCount)
    //             onesCount=0
    //         }else{
    //             onesCount++
    //         }
    //     }
    //     return maxOnesCount > onesCount ? maxOnesCount : onesCount
    // }
    // let l=0
    // let r=0
    // let maxConsecOnesLen=0
    // let zeroCount=0
    // while(l<=r && r<nums.length){
    //     r=l
    //     while(zeroCount<=k && r<nums.length){
    //         if(nums[r]==0) zeroCount++
    //         if(zeroCount > k) break
    //         r++
    //     }
    //     maxConsecOnesLen = Math.max(maxConsecOnesLen,(r-l))
    //     l++
    //     zeroCount=0
    // }
    // return maxConsecOnesLen
    //worked with 969ms tc with 5.02% beat has O(n^2) with worst low-beat
    // optims now always expanding right and shrinking left cleanly to maintain a sliding window
    let left=0
    let maxLen =0
    let zeroes=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]==0) zeroes++
        while(zeroes > k){
            if(nums[left]==0) zeroes--
            left++
        }
        maxLen = Math.max(maxLen,right-left+1)
        // console.log(left,right)
    }
    return maxLen
    //2ms tc with 85.75% beat
}
// console.log(max_consecutive_ones_III([1,1,1,0,0,0,1,1,1,1,0],2)) //6
// console.log(max_consecutive_ones_III([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)) //10
// console.log(max_consecutive_ones_III([0,0,0,1],4)) //4
// console.log(max_consecutive_ones_III([0,0,1,1],1)) //3
// console.log(max_consecutive_ones_III([0,0,1,1,1,0,0],0)) //3
// console.log(max_consecutive_ones_III([1,1,1,0,0,0,1,1,1,1],0)) //4
// console.log(max_consecutive_ones_III([0],1)) //1

function longest_repeating_character_replacement(s,k){
    // if(k==0){
    //     let f=1
    //     let p =1
    //     for(let i=0;i<s.length-1;i++){
    //         if(s[i]==s[i+1]) p++
    //         if(s[i]!=s[i+1]){
    //             f=Math.max(f,p)
    //             p=1
    //         }
    //     }
    //     f=Math.max(f,p)
    //     return f
    // }
    // let longestRepeatingCharacterSeq=0
    // let presentMaxCharCount=0
    // let presentMaxChar;
    // let map = new Map()
    // let l=0
    // for(let r=0;r<s.length;r++){
    //     map.set(s[r],(map.get(s[r]) || 0)+1)
    //     presentMaxCharCount = Math.max(presentMaxCharCount,map.get(s[r]))
    //     while((r-l+1)-presentMaxCharCount>k){
    //         let char = s[l]
    //         if(presentMaxChar == char) presentMaxCharCount--
    //         map.set(char,map.get(char)-1)
    //         l++
    //     }
    //     longestRepeatingCharacterSeq = Math.max(longestRepeatingCharacterSeq,(r-l+1))
    // }
    // return longestRepeatingCharacterSeq
    // 21ms with 43.31% beat
    // the 17ms and most used version
    // let left = 0;
    // let maxCount = 0;
    // let maxLen = 0;
    // const charFreq = {};
    // for(let right = 0; right<s.length; right++){
    //     const char = s[right];
    //     charFreq[char] = (charFreq[char] || 0) + 1;
    //     maxCount = Math.max(maxCount, charFreq[char]);
    //     while (right-left+1 - maxCount > k){
    //         charFreq[s[left]]--;
    //         left++;
    //     }
    //     maxLen = Math.max(maxLen, right - left + 1); 
    // }
    // return maxLen;
    //using a 26len array reduces the tc to 2ms its good coz the string contains only capital ones
    let left = 0;
     let charFreq = new Array(26).fill(0);
     let maxFreq = 0;
     for (let right = 0; right < s.length; right++) {
        charFreq[s.charCodeAt(right) - 65]++
        maxFreq = Math.max(maxFreq, charFreq[s.charCodeAt(right) - 65])
        if ((right - left + 1) - maxFreq > k) {
            charFreq[s.charCodeAt(left) - 65]--
            left++
        }
     }
     return s.length - left
}
// console.log(longest_repeating_character_replacement('ABAB',2)) //4
// console.log(longest_repeating_character_replacement('AABABBA',1)) //4
// console.log(longest_repeating_character_replacement('BAAA',0)) //3
// console.log(longest_repeating_character_replacement('AABA',0)) //2
// console.log(longest_repeating_character_replacement('EQQEJDOBDPDPFPEIAQLQGDNIRDDGEHJIORMJPKGPLCPDFMIGHJNIIRSDSBRNJNROBALNSHCRFBASTLRMENCCIBJLGAITBFCSMPRO',2)) //5


function minimum_window_substring(s,t){
    let sLen = s.length
    let tLen = t.length
    if(sLen < tLen) return ''
    let res;
    let currLen=0
    let l=0
    let r=0
    while(currLen )

    return res
}
// console.log(minimum_window_substring('ADOBECODEBANC','ABC')) // "BANC"
// console.log(minimum_window_substring('a','a')) // 'a'
// console.log(minimum_window_substring('a','aa')) // ''

function sliding_window_maximum(nums,k){
    //brute force
    // let res=[]
    // for(let i=0;i<nums.length;i++){
    //     let slice = nums.slice(i,i+k)
    //     if(slice.length < k) break
    //     res.push(getMax(slice))
    // }
    // function getMax(slice){
    //     let max=slice[0]
    //     for(let num of slice){
    //         if(num>max) max=num
    //     }
    //     return max
    // }
    // return res
    // tle at 37/51 due to O(n*k)
    
}
// console.log(sliding_window_maximum([1,3,-1,-3,5,3,6,7],3))
// console.log(sliding_window_maximum([1],1))