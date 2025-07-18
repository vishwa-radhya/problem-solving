var NumArray = function(nums) {
    let ps =[]
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    this.ps=nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left==0) return this.ps[right]
    return this.ps[right]-this.ps[left-1]
};
/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// here using traditional for loop for each range requires O(n) for query
//by using prefix-sum we reduce it to O(1)

function subarray_sum_equals_k(nums,k){
    // let count =0
    // for(let i=1;i<=nums.length;i++){
    //     for(let j=0;j<=nums.length-i;j++){
    //         let slice = nums.slice(j,j+i)
    //         if(slice.reduce((a,s)=>a+s,0) == k) count++
    //     }
    // }
    // return count
    // tle at 61/93 due to O(n^2) tc
    // lets try to use fast sum calc using prefix sum (cummilative sum)
    // let count=0
    // let prefixSumArray=[]
    // prefixSumArray[0]=0
    // for(let i=1;i<=nums.length;i++){
    //     prefixSumArray[i]=prefixSumArray[i-1]+nums[i-1]
    // }
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<=nums.length;j++){
    //         if(prefixSumArray[j]-prefixSumArray[i]==k) count++
    //     }
    // }
    // return count
    //worked but my tc is 1661 ms with 5% beat
    // using a len variable instead of nums.length changed tc to 1620ms not so fast
    // using hashmap based approach for O(n) tc 
    let count=0
    let currentSum=0
    let map = new Map()
    map.set(0,1)
    for(let num of nums){
        currentSum+=num
        if(map.has(currentSum-k)) count+=map.get(currentSum-k)
        map.set(currentSum,(map.get(currentSum) || 0)+1)
    }
    return count
    //got top band with 23ms and 43.73% beat
}
// console.log(subarray_sum_equals_k([1,1,1],2));
// console.log(subarray_sum_equals_k([1,2,3],3));

function subarray_sum_divisible_by_k(nums,k){
    //used same prefixSumArray approach got tle at 66/76 
    // let count=0
    // let prefixSumArray=[]
    // prefixSumArray[0]=0
    // for(let i=1;i<=nums.length;i++){
    //     prefixSumArray[i]=prefixSumArray[i-1]+nums[i-1]
    // }
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<=nums.length;j++){
    //         if((prefixSumArray[j]-prefixSumArray[i])%k == 0) count++
    //     }
    // }
    // return count
    //using same hashmap technique with adjustment
    let count=0
    let currentSum=0
    let map = new Map()
    map.set(0,1)
    for(let num of nums){
        currentSum+=num
        let mod = ((currentSum%k)+k)%k
        if(map.has(mod)) count+=map.get(mod)
        map.set(mod,(map.get(mod) || 0)+1)
    }
    return count
    // got 20ms with 30% beat
    //the best sol with 1ms tc
    // const remainderMap = new Array(k).fill(0)

    // // Initialize with 1 for sum=0 case (empty subarray)
    // remainderMap[0] = 1

    // // Counter for valid subarrays
    // let result = 0
    // // Running sum of elements
    // let runningSum = 0

    // for (let i = 0; i < nums.length; i++) {
    //     // Add current number to running sum
    //     runningSum += nums[i]

    //     // Calculate remainder when divided by k
    //     let remainder = runningSum % k

    //     // Handle negative remainders
    //     if (remainder < 0) remainder += k

    //     // Add frequency of this remainder to result
    //     result += remainderMap[remainder]
    //     // Increment frequency of this remainder
    //     remainderMap[remainder]++
    // }

    // return result
}
