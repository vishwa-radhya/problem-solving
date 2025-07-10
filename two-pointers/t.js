function two_sum_2(numbers,target){
    // let i=0
    // let j=1
    // let l=numbers.length

    // while(i<l-1 && j<l){
    //     console.log(numbers[i]+numbers[j])
    //     if(numbers[i]+numbers[j]!==target){
    //         j++
    //         if(j===l){
    //             i++
    //             j=i+1
    //         }
    //     }else{
    //         return [i+1,j+1]
    //     }
    // }
    // time limit exceeded for large data sets above approach
    // let c=0
    // let remainingIndex=0;
    // while(c<numbers.length-1){
    //     let remaining = target- numbers[c]
    //     remainingIndex = bsearch_for_two_sum_2(numbers,c+1,remaining);
    //     if(remainingIndex!==-1){
    //         break
    //     }
    //     c++
    // }
    // return [c+1,remainingIndex+1]
    // has an efficient two pointer approach coz its an sorted array
    let left =0
    let right = numbers.length-1
    while(left<right){
        let sum = numbers[left]+numbers[right]
        if(sum===target){
            return [left+1,right+1]
        }
        else if(sum<target){
            left++
        }else{
            right--
        }
    }
}
// function bsearch_for_two_sum_2(nums,startIndex,target){
//     let left = startIndex;
//     let right = nums.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(nums[mid]===target){
//             return mid
//         }else if(target>nums[mid]){
//             left=mid+1
//         }else if(target<nums[mid]){
//             right=mid-1
//         }
//     }
//     return -1
// }
// console.log(two_sum_2([2,7,11,15],9))
// console.log(two_sum_2([2,3,4],6))
// console.log(two_sum_2([-1,0],-1))
// console.log(two_sum_2([1,2,3,4,4,9,56,90],8))

function max_area(height){
//     let maxArea=0
//     for(let i=0;i<height.length-1;i++){
//        let j=height.length-1
//     while(j>i){
//         let areaLine = Math.min(height[i],height[j])
//         let area = (j-i)*areaLine
//         if(area>maxArea){
//             maxArea=area
//         }
//         j--
//     }
//    }
//    return maxArea
// time limit exceeded for large data
// on considering the possibilty that taller ones give more area we need to move pointers in O=(n) time
let i=0
let j=height.length-1
let maxArea=0
while(i<j){
    maxArea = Math.max(maxArea,(j-i)*Math.min(height[i],height[j]))
    // unusing Math.* gives lesser tc
    if(height[i]>height[j]){
        j--
    }else{
        i++
    }
}
return maxArea
}
// console.log(max_area([1,8,6,2,5,4,8,3,7]))
// console.log(max_area([1,1]))
// console.log(max_area([1,2,1]))

function three_sum(nums){
    let res=[]
    let len = nums.length
    for(let i=0;i<=len-3;i++){
        let j = i+1
        let k = len-1
        while(j<k){
            let sum=0
            sum=nums[i]+nums[j]+nums[k]
            if(sum==0) res.push([i,j,k])
            j++
            if(j<k){
                sum=nums[i]+nums[j]+nums[k]
                if(sum==0) res.push([i,j,k])
            }
            k--
            if(j<k){
                sum=nums[i]+nums[j]+nums[k]
                if(sum==0) res.push([i,j,k])
            }
        }
    }
    return res
}
// console.log(three_sum([-1,0,1,2,-1,4]))
// console.log(three_sum([0,0,1]))
// console.log(three_sum([0,0,0]))