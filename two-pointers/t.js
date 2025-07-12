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
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-2;i++){
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        let l=i+1;
        let r = nums.length-1;
        while(l<r){
            let sum = nums[i]+nums[l]+nums[r];
            if(sum >0){
                r-=1;
            }else if(sum<0){
                l+=1;
            }else{
                res.push([nums[i],nums[l],nums[r]]);
                l+=1
                while(nums[l] == nums[l-1] && l<r){
                    l+=1
                }
            }
        }
    }
    return res
    // 37ms with 54.42% beat
    // 21ms is the highest with same approach 
}
// console.log(three_sum([-1,0,1,2,-1,4]))
// console.log(three_sum([0,0,1]))
// console.log(three_sum([0,0,0]))

function trapping_rain_water(height){
    let trapCount=0
    let len = height.length;
    let j;
    for(let i=0;i<len-1;i++){
        if(height[0]==0) {
            continue;
        }
        j=i+1;
        while(j<len){
            if(height[j]<height[i]){
                j++
            }else{
                if(j-i>1){
                    break
                }
            }
            j++
        }
        console.log(i,j)
        break
    }
}
// console.log(trapping_rain_water([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
// console.log(trapping_rain_water([4,2,0,3,2,5])) // 9