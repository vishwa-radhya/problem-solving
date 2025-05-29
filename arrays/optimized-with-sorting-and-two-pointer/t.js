function intersection_of_two_arrays(arr1,arr2){
    // let n=[]
    // for(let i=0;i<nums1.length;i++){
    //     if(nums2.includes(nums1[i]) && !n.includes(nums1[i])) n.push(nums1[i])
    // }
    // return n
    //optimized
    let n=[]
    let n1set = new Set(nums1)
    let n2set = new Set(nums2)
    for(let num of n1set){
        if(n2set.has(num)){
            n.push(num)
        }
    }
    return n
    /**
     * two pointer approach
     *  nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
     */
}