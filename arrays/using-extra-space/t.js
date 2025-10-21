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
var removeDuplicates2 = function(nums) {
    let presentCount = 1
    let k=1
    for(let i=1;i<nums.length;i++){
        // console.log('present ele',nums[i])
        if(nums[i] == nums[i-1]){
            // console.log('accept if')
            if(presentCount<2){
                // console.log('accept if inside')
                nums[k]=nums[i]
                k++
                presentCount++
            }
        }else{
            // console.log('reject reset')
            nums[k]=nums[i]
            k++
            presentCount=1
        }
        // console.log(nums)
    }
    console.log(nums)
    return k
};
// console.log(removeDuplicates2([1,1,1,2,2,3]))
// console.log(removeDuplicates2([0,0,1,1,1,1,2,3,3]))

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
    // console.log(nums1.sort((a,b)=>a-b))
    let i,j,temp;
    let swapped = false;
    for(i=0;i<m+n-1;i++){
        swapped = false;
        for(j=0;j<m+n-i-1;j++){
            if(nums1[j]>nums1[j+1]){
                temp = nums1[j]
                nums1[j]=nums1[j+1]
                nums1[j+1]=temp
                swapped = true
            }
        }
        if (!swapped) break;
    }
    console.log(nums1)
}
// merge_sorted_array([1,2,3,0,0,0],3,[2,5,6],3)
function rotateArray(nums,k){
    let l=nums.length
    let res=[]
    for(let i=0;i<nums.length;i++){
        res[(i+k)%l]=nums[i]
    }
    return res
}

function jump_game(nums){
    let reach = 0
    for(let i=0;i<nums.length;i++){
        if(i>reach) return false
        console.log(reach,'bef')
        reach = Math.max(reach,i+nums[i])
        console.log(reach,'aft')
        if(reach >= nums.length-1) return true
    }
}
// jump_game([2,3,1,1,4]) // true
// jump_game([3,2,1,0,4]) //false
// jump_game([0,2,3]) //false

var RandomizedSet = function() {
    this.set = new Set();
    this.array=[]
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) return false
    this.set.add(val)
    this.array.push(val)
    console.log(this.set,this.array)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.set.has(val)) return false
    this.set.delete(val)
    this.array=this.array.filter(e=>e!=val)
    console.log(this.set,this.array)
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.array[Math.floor(Math.random()*this.set.size)]
};

var obj = new RandomizedSet()
obj.insert(1)
obj.remove(2)
obj.insert(2)
console.log(obj.getRandom())
obj.remove(1)
obj.insert(2)
console.log(obj.getRandom())
