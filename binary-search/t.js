function binary_search(nums,target){
    let left =0
    let right = nums.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]==target){
            return mid
        }else if(target>nums[mid]){
            left=mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}

function search_2d_matrix(matrix,target){
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[i].length;j++){
    //         if(matrix[i][j]===target){
    //             return true
    //         }
    //     }
    // }
    // return false
    for(let i=0;i<matrix.length;i++){
        if(target>=matrix[i][0] && target<=matrix[i][matrix[i].length-1]){
            let left=0;
            let right=matrix[i].length-1;
            while(left<=right){
                let mid=Math.floor((left+right)/2);
                if(matrix[i][mid]===target){
                    return true
                }else if(target>=matrix[i][mid]){
                    left=mid+1;
                }else{
                    right=mid-1;
                }
            }
        }
    }
    return false
    // return matrix?.flat()?.includes(target)
}
// console.log(search_2d_matrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]]),3)

function search_insert_position(nums,target){
    let chk = nums.findIndex(e=>e===target)
    if(chk !== -1){
        return chk
    }else{
        for(let i=0;i<nums.length;i++){
            if(nums[i]>target){
                return i;
            }
        }
        return nums.length;
    }
}

function find_first_and_last_position_of_element_in_sorted_array(nums,target){
    function findLeft(){
        let idx=-1;
        let i=0,j=nums.length-1;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(nums[mid]>=target) j=mid-1
            else i=mid+1
            if(nums[mid]===target) idx=mid
        }
        return idx
    }
    function findRight(){
         let idx=-1;
        let i=0,j=nums.length-1;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(nums[mid]<=target) i=mid+1
            else j=mid-1
            if(nums[mid]===target) idx=mid
        }
        return idx
    }
    return [findLeft(),findRight()]
}
// console.log([5,7,7,8,8,10],8)

function search_in_rotated_sorted_array(nums,target){
    let i=0
    let j=nums.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)
        if(nums[mid]==target){
            return mid
        }else if(nums[i] <= nums[mid]){
            if(nums[i]<=target && target<=nums[mid]){
                j=mid-1
            }else{
                i=mid+1
            }
        }else if(nums[j]>=nums[mid]){
            if(nums[mid]<=target && target<=nums[j]){
                i=mid+1
            }else{
                j=mid-1
            }
        }
    }
    return -1
}
// console.log(search_in_rotated_sorted_array([4,5,6,7,0,1,2],0))

function find_minimum_in_rotated_sorted_array(nums){
    // let target = Math.min(...nums)
    //  let i=0
    // let j=nums.length-1
    // while(i<=j){
    //     let mid = Math.floor((i+j)/2)
    //     if(nums[mid]==target){
    //         return nums[mid]
    //     }else if(nums[i] <= nums[mid]){
    //         if(nums[i]<=target && target<=nums[mid]){
    //             j=mid-1
    //         }else{
    //             i=mid+1
    //         }
    //     }else if(nums[j]>=nums[mid]){
    //         if(nums[mid]<=target && target<=nums[j]){
    //             i=mid+1
    //         }else{
    //             j=mid-1
    //         }
    //     }
    // }
    // return -1
    let cutPoint=1;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1]) cutPoint++
        else break
    }
    if(cutPoint == nums.length) return nums[0]
    let posToSwap = nums.length-cutPoint
    nums = nums.reverse()
    let i=0
    let j=posToSwap-1
    while(i<j){
        let t= nums[i]
        nums[i]=nums[j]
        nums[j]=t
        i++
        j--
    }
    return nums[0] ?? -1
}
// console.log(find_minimum_in_rotated_sorted_array([3,4,5,1,2]))
// console.log(find_minimum_in_rotated_sorted_array([4,5,6,7,0,1,2]))
// console.log(find_minimum_in_rotated_sorted_array([11,13,15,17]))

function find_peak_element(nums){
    // let max = Math.max(...nums)
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]==max) return i
    // }
    // return -1
    // got 0ms with 100% beat but not O(logn) it is O(n)
    // the 1ms sol with O(log n) tc
    let l = 0;
    let r = nums.length - 1
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid + 1]) {
            r = mid;
        } else {
            l = mid + 1
        }
    }
    return l; // same for 0ms with slight calc at mid

}
// console.log(find_peak_element([1,2,3,1]))
// console.log(find_peak_element([1,2,1,3,5,6,4]))
// console.log(find_peak_element([6,5,4,3,2,3,2]))