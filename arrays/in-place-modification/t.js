/**
 * remove duplicates from sorted array
 */
// using extra space
function remove_duplicates_from_sorted_array_in_place_and_return_length(arr){
    let k=1
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            arr[k]=arr[i]
            k++
        }
    }
    console.log(k);
}
// remove_duplicates_from_sorted_array_in_place_and_return_length([1,1,2,2,3,4,4,4,5,5,6])

function remove_occurence_of_element_and_return_length(arr,val){
    let k=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==val){
            arr[k]=arr[i]
            k++
        }
    }
    console.log(k);
}
// remove_occurence_of_element_and_return_length([1,2,3,2,2,2,1,2],2)
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