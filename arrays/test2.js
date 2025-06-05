function search_in_sorted_array(nums,target){
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1
    // worked fine with 0ms and beats 100%
}
// console.log(search_in_sorted_array([4,5,6,7,0,1,2],0));

function find_first_and_last_pos_of_element_in_sorted_array(nums,target){
    // let ar=[]
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===target){
    //         ar.push(i)
    //     }
    // }
    // return ar.length ? ar.length===1 ? [ar[0],ar[0]] :[ar[0],ar[ar.length-1]] : [-1,-1];
    // 1ms at O(n) tc
    // optims
    // return [nums.findIndex(e=>e===target),nums.lastIndexOf(target)]
    //beats 100% but uses in built methods
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
    // works beats 100% with 0ms
};

// console.log(find_first_and_last_pos_of_element_in_sorted_array([5,7,7,8,8,10],8))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([5,7,7,8,8,10],6))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([],0))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([1],1))
function rotate_image(matrix){

    // transposing th matrix row<->col
    //across diagnol
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix[i].length;j++){
            let t=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=t
        }
    }
    //now reverse each row 
    for(let i=0;i<matrix.length;i++){
        let mat=matrix[i];
        let k=0,j=mat.length-1
        while(k<j){
            let t = mat[k]
            mat[k]=mat[j]
            mat[j]=t
            k++
            j--
        }
    }

    return matrix
}
// console.log(rotate_image([[1,2,3],[4,5,6],[7,8,9]]))
function search_a_2d_matrix(matrix,target){
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[i].length;j++){
    //         if(matrix[i][j]===target){
    //             return true
    //         }
    //     }
    // }
    // return false
    //works and beats 100% but has O(n^2) tc
    // we got rules like each row is sorted in non-decreasing order.
    // and The first integer of each row is greater than the last integer of the previous row.
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
    // O(nlogn) works and beats 100%
    // down is the real js lol 
    // return matrix?.flat()?.includes(target);
}
// console.log(search_a_2d_matrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],1))

function summary_ranges(nums){
    if(!nums.length) return nums
    let len =nums.length;
    let res=[]
    let j=nums[0];   
    for(let i=0;i<len-1;i++){
        if(nums[i]+1!==nums[i+1]){
            if(j==nums[i]){
                res.push(`${j}`)
            }else{
                res.push(`${j}->${nums[i]}`)
            }
            j=nums[i+1]
        }
    }
    if(j==nums[len-1]){
        res.push(`${j}`)
    }else{
        res.push(`${j}->${nums[len-1]}`)
    }
    return res
}
// console.log(summary_ranges([0,2,3,4,6,8,9]))
// console.log(summary_ranges([0,1,2,4,5,7]))
