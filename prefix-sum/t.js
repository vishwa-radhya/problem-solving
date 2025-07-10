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
