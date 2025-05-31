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
function product_of_array_except_itself(nums){
    // let r=[]
    // let l=nums.length
    // for(let i=0;i<nums.length;i++){
    //     let left=nums.slice(0,i)
    //     let right=nums.slice(i+1,l)
    //     r[i]=left.reduce((a,b)=>a*b,1)*right.reduce((a,b)=>a*b,1)
    // }
    // return r
    // tle for large arrays
    // the similar one without methods
    // let r=[]
    // let l=nums.length
    // for(let i=0;i<l;i++){
    //     r[i]=1
    //     for(let j=0;j<l;j++){
    //         if(i!==j){
    //             r[i]=r[i]*nums[j]
    //         }
    //     }
    // }
    // return r
    // but still tle
    // using precomputed prefix and suffix product arrays from left and right iterations respectively
    // let prefix=[]
    // let suffix=[]
    // let output=[]
    // let length=nums.length
    
    // prefix[0]=1
    // for(let i=1;i<length;i++){
    //     prefix[i]=prefix[i-1]*nums[i-1]
    // }
    // suffix[length-1]=1
    // for(let i=length-2;i>=0;i--){
    //     suffix[i]=suffix[i+1]*nums[i+1]
    // }
    // console.log(prefix)
    // for(let i=0;i<length;i++){
    //     output[i]=prefix[i]*suffix[i]
    // }
    // return output
    // successfully but can be optimzed through eliminating prefix or suffix arrays
    // by precompiting prefix and assiging as output initially and multiplyting with suffix and and updating on the fly
    let length=nums.length
    let output=[]
    output[0]=1
    for(let i=1;i<length;i++){
        output[i]=output[i-1]*nums[i-1]
    }
    let currentSuffixProduct=1
    for(let i=length-1;i>=0;i--){
        output[i]=output[i]*currentSuffixProduct
        currentSuffixProduct=currentSuffixProduct*nums[i]
    }
    return output
    // little variable tweak can get lesser tc
}
// console.log(product_of_array_except_itself([1,2,3,4]))
// console.log(product_of_array_except_itself([-1,1,0,-3,3]))
function first_missing_positive(nums){
    if(nums.length===1 && nums[0]===0) return 1
    let allNeg = nums.filter(e=>e<=0).length
    if(allNeg===nums.length) return 1
    nums=[...new Set(nums.sort((a,b)=>a-b).filter(e=>e>0))]
    let k=0;
    let length=nums.length-1
    for(let i=1;i<=nums[length]+1;i++){
        if(i<nums[k]){
            return i
        }
        if(i!==nums[k]){o
            return i
        }
        k++
    }
    // solved but took a lot of time nearly 70ms+ in nodejs leetcode env
    // optims
    
}
// console.log(first_missing_positive([1,2,0]))
// console.log(first_missing_positive([3,4,-1,1]))
// console.log(first_missing_positive([7,8,9,11,12]))
// console.log(first_missing_positive([1,2,0]))
console.log(first_missing_positive([0,2,2,1,1]))
