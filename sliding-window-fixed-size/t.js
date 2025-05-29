function find_maximum_average(nums,k){
     let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let maxSum =sum
    for(let i=k;i<nums.length;i++){
        sum =sum-nums[i-k]+nums[i]
        maxSum=Math.max(sum,maxSum)
    }
    return maxSum/k
}
// console.log(find_maximum_average([1,12,-5,-6,50,3],4))
// console.log(find_maximum_average([5],1))
// console.log(find_maximum_average([0,1,1,3,3],4))