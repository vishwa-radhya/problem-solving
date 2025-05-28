function remove_duplicates_from_sorted_array(arr){
    let unique=[]
    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    console.log(unique)
}
// remove_duplicates_from_sorted_array([1,1,2,2,3,4,4,4,5,5,6])

var reverseVowels = function(s) {
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    let extractVowels=s.split('').filter(e=>vowels.includes(e)).reverse().join('')
    // let el=extractVowels.length
    let se=s.split('')
    console.log(extractVowels)
    let k=0
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            console.log('hit')
            se[i]=extractVowels[k]
            k++
        }
    }
    return se.join('')
};
// console.log(reverseVowels('IceCreAm'))

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

function merge_sorted_array(nums1,m,nums2,n){
    let k=0
    for(let i=m;i<m+n;i++){
        nums1[i]=nums2[k]
        k++
    }
    console.log(nums1.sort((a,b)=>a-b))
}
// merge_sorted_array([1,2,3,0,0,0],3,[2,5,6],3)