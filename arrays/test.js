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
    // let length=nums.length
    // let output=[]
    // output[0]=1
    // for(let i=1;i<length;i++){
    //     output[i]=output[i-1]*nums[i-1]
    // }
    // let currentSuffixProduct=1
    // for(let i=length-1;i>=0;i--){
    //     output[i]=output[i]*currentSuffixProduct
    //     currentSuffixProduct=currentSuffixProduct*nums[i]
    // }
    // return output
    // little variable tweak can get lesser tc
}
// console.log(product_of_array_except_itself([1,2,3,4]))
// console.log(product_of_array_except_itself([-1,1,0,-3,3]))
function first_missing_positive(nums){
    // if(nums.length===1 && nums[0]===0) return 1
    // let allNeg = nums.filter(e=>e<=0).length
    // if(allNeg===nums.length) return 1
    // nums=[...new Set(nums.sort((a,b)=>a-b).filter(e=>e>0))]
    // let k=0;
    // let length=nums.length-1
    // for(let i=1;i<=nums[length]+1;i++){
    //     if(i<nums[k]){
    //         return i
    //     }
    //     if(i!==nums[k]){
    //         return i
    //     }
    //     k++
    // }
    // solved but took a lot of time nearly 70ms+ in nodejs leetcode env
    // optims
    // brute force appraoch which takes O(n^2)
    // let len = nums.length;
    // for(let i=1;i<=len+1;i++){
    //     let found = false
    //     for(let num of nums){
    //         if(num===i){
    //             found =true
    //             break
    //         }
    //     }
    //     if(!found){
    //         return i
    //     }
    // }
    // return -1
    // fails for large test cases like 1 to 100000
    // coz we may check the duplicates also it takes O(n^2)
    // use hashset which has O(1) access to make the tc to O(n)
    // let set = new Set()
    // let length=nums.length
    // for(let i=0;i<length;i++){
    //     set.add(nums[i])
    // }
    // for(let i=1;i<=length+1;i++){
    //     if(!set.has(i)){
    //         return i;
    //     }
    // }
    // return -1
    // solves but still has the best approaches
    // using cyclic sort assuming the range is between 1 to n inclusive
    let len = nums.length
    for(let i=0;i<len;i++){
        while(nums[i]>0 && nums[i]<=len && nums[nums[i]-1] !== nums[i]){
            let temp = nums[nums[i]-1]
            nums[nums[i]-1]=nums[i]
            nums[i]=temp
        }
    }
    for(let i=0;i<len;i++){
        if(nums[i]!=i+1){
            return i+1
        }
    }
    return len+1
}
// console.log(first_missing_positive([1,2,0]))
// console.log(first_missing_positive([3,4,-1,1]))
// console.log(first_missing_positive([7,8,9,11,12]))
// console.log(first_missing_positive([1,2,0]))
// console.log(first_missing_positive([0,2,2,1,1]))
// console.log(first_missing_positive([-1,-2,-3]))
// console.log(first_missing_positive([-1,0]))

function num_of_zero_filled_sub_arrays(nums){
    // let res=0
    // let i=0
    // let len = nums.length
    // while(i<len){
    //     let countContinuosZeros=0
    //     let j=i
    //     while(j<len){
    //         if(nums[j]!==0){
    //             break
    //         }
    //         j++
    //     }
    //     countContinuosZeros=j-i
    //     if(countContinuosZeros){
    //         i+=countContinuosZeros
    //     }else{
    //         i++
    //     }
    //     if(countContinuosZeros){
    //         // for(let k=countContinuosZeros;k>=1;k--){
    //         //     res+=k;
    //         // }
    //         // avoiding loop through with math formula num of sub zeroes is (n*(n+1))/2
    //         // as we saw earlier [0,0] = 2+1
    //         // as we saw earlier [0,0,0] = 3+2+1
    //         // as we saw earlier [0,0,0,0] = 4+3+2+1
    //         // it is sum of n natural numbers
    //         // so,
    //         res+=((Math.floor(countContinuosZeros*(countContinuosZeros+1)))/2)
    //     }
    // }
    // return res
    // success beat with tc 5ms but it has (not takes) O(n^2) tc
    // optimal one with O(n) tc
    let count=0,res=0
    for(let num of nums){
        if(num===0){
            count++
            res+=count
        }else{
            count=0
        }
    }
    return res
    // just twaeking code structure gives less tc
    // let count=0
    // let res=0
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]==0){
    //         count=count+1
    //         res=res+count
    //     }else{
    //         count=0
    //     }
    // }
    // return res
    // like so whatever
}
// console.log(num_of_zero_filled_sub_arrays([1,3,0,0,2,0,0,4]))
// console.log(num_of_zero_filled_sub_arrays([0,0,0,2,0,0]))
// console.log(num_of_zero_filled_sub_arrays([2,10,2019]))
function increasing_triplet_subsequence(nums){
    // for(let i=0;i<=nums.length-3;i++){        
    //     for(let j=i+1;j<=nums.length-2;j++){
    //         for(let k=j+1;k<=nums.length-1;k++){
    //             if((i<j<k) && ((nums[i]<nums[j])&&(nums[j]<nums[k]))){
    //                 return true
    //             }
    //         }
    //     }
    // }
    // return false
    // worst case O(n^3) ...
    let first=Number.MAX_VALUE;
    let second=Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<=first){
            first=nums[i]
        }else if(nums[i]<=second){
            second=nums[i]
        }else{
            return true
        }
    }
    return false
    //beats 100% first O(n) complexity
    // another approch which takes 7ms but works fine
    // let cache = [nums[0], null]
    // for(let num of nums){
    //     if(cache[1] !== null && num > cache[1]){
    //         return true
    //     } else if(num > cache[0]){
    //         cache[1] = cache[1] === null ? num : Math.min(num, cache[1]);
    //     } else {
    //         cache[0] = Math.min(num, cache[0])
    //     }
    // }
    // return false
}
// console.log(increasing_triplet_subsequence([1,2,3,4,5]))
// console.log(increasing_triplet_subsequence([5,4,3,2,1]))
// console.log(increasing_triplet_subsequence([2,1,5,0,4,6]))
// console.log(increasing_triplet_subsequence([1,5,0,4,1,3]))

function best_time_to_buy_and_sell_stocks_2(prices){
   // simple approach is cash every opportunity where the profit can be made
//    let profit=0
//    for(let i=1;i<prices.length;i++){
//     if(prices[i]>prices[i-1]){
//         profit+=prices[i]-prices[i-1]
//     }
//    }
//    return profit
   //beats 100%
   // even it is not easy to figure out i actually thought something similar to peaks and valleys appraoch but cant implement it good so here is the actual one
   // find local min and local max sub them and add to total do for next iteration
   // like a graph of peaks and valleys
   let peak=prices[0]
   let valley = prices[0]
   let maxProfit=0
   let i=0
   let len =prices.length
   while(i<len-1){
    //finding local min (valley)
    while(i<len-1 && prices[i]>=prices[i+1]){
        i++
    }
    valley=prices[i]
    //finding local max (peak)
    while(i<len-1 && prices[i]<=prices[i+1]){
        i++
    }
    peak=prices[i]
    maxProfit+=peak-valley
   }
   return maxProfit
   // if we see carefully the first approach does the same thing it can be visulaized correct on a graph about how actually we are making the profit by buying and selling at peaks and valleys.
}
// console.log(best_time_to_buy_and_sell_stocks_2([7,1,5,3,6,4]))
// console.log(best_time_to_buy_and_sell_stocks_2([1,2,3,4,5]))
// console.log(best_time_to_buy_and_sell_stocks_2([7,6,4,3,1]))

function check_if_array_is_sorted_and_rotated(nums){
    let isSorted=true;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            isSorted=false;
        }
    }
    if(isSorted) return true
    let isRotated=true
    let rotationPoint=0
    let numOfRotationPoints=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1]){
            rotationPoint=i;
            numOfRotationPoints++
        }
    }
    if(numOfRotationPoints>1) return false
    if(numOfRotationPoints===1){
        let k=0
        let l=nums.length-1
        rotationPoint++
        while(k<l){
            if(nums[rotationPoint%(l+1)]>nums[(rotationPoint+1)%(l+1)]){
                isRotated=false
            }
            rotationPoint++
            k++
        }
    }
    if(isRotated) return true
    return false
    //beats 100% with 0ms
}
// console.log(check_if_array_is_sorted_and_rotated([1,2,3,4,5]))
// console.log(check_if_array_is_sorted_and_rotated([3,4,5,1,2]))
// console.log(check_if_array_is_sorted_and_rotated([5,4,3,2,1]))
// console.log(check_if_array_is_sorted_and_rotated([2,1,3,4]))
// console.log(check_if_array_is_sorted_and_rotated([6,10,6]))
// console.log(check_if_array_is_sorted_and_rotated([10,1,1,10]))