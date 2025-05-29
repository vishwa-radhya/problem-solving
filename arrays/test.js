function rotateArray(nums,k){
    let l=nums.length
    let res=[]
    for(let i=0;i<nums.length;i++){
        res[(i+k)%l]=nums[i]
    }
    return res
}
//extra space needed
function rotate_array_in_place(nums,k){
    k=k%nums.length
   let i=0,j=nums.length-1
    while(i<j){
        // [nums[i],nums[j]]=[nums[j],nums[i]]
        let t=nums[i]
        nums[i]=nums[j]
        nums[j]=t
        i++,j--
    }
    let i1=0,j1=k-1
    while(i1<j1){
        // [nums[i1],nums[j1]]=[nums[j1],nums[i1]]
        let t=nums[i1]
        nums[i1]=nums[j1]
        nums[j1]=t
        i1++,j1--
    }
    let i2=k,j2=nums.length-1
    while(i2<j2){
        // [nums[i2],nums[j2]]=[nums[j2],nums[i2]]
        let t=nums[i2]
        nums[i2]=nums[j2]
        nums[j2]=t
        i2++,j2--
    }
    return nums
}
// beats 100%
// console.log(rotate_array_in_place([1,2,3,4,5,6,7],3));
// console.log(rotate_array_in_place([-1,-100,3,99],2));
