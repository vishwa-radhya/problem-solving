function find_maximum_average(nums,k){
     let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let maxSum =sum
    for(let i=k;i<nums.length;i++){
        sum =sum-nums[i-k]+nums[i]
        maxSum=Math.max(sum,maxSum)
    }
    return maxSum/k
}
// console.log(find_maximum_average([1,12,-5,-6,50,3],4))
// console.log(find_maximum_average([5],1))
// console.log(find_maximum_average([0,1,1,3,3],4))

function find_all_anagrams_in_a_string(s,p){
    // let arr=new Array(26).fill(0)
    // let pLen = p.length
    // for(let i=0;i<pLen;i++) arr[(p[i].charCodeAt()-97)]++
    // let res=[]
    // let windowSize = p.length
    // for(let i=0;i<=s.length-windowSize;i++){
    //     let val=0
    //     let c=Array.from(arr)
    //     for(let j=i;j<i+windowSize;j++){
    //         if(c[s[j].charCodeAt()-97]>0){
    //             val++
    //             c[s[j].charCodeAt()-97]--
    //         }
    //     }
    //     if(val==pLen) res.push(i)
    // }
    // return res
    //worked but with 924ms with 5.09% beat using 26 len freq letter array 
    // optimizing to O(n) or lesser than O(n^2) tc time
    if(s.length < p.length) return []
    let pHash = new Array(26).fill(0)
    let sHash = new Array(26).fill(0)
    let pLen = p.length
    let sLen = s.length
    for(let i=0;i<pLen;i++) {
        pHash[(p[i].charCodeAt()-97)]++
        sHash[(s[i].charCodeAt()-97)]++
    }
    let res=[]
    for(let i=0;i<=sLen-pLen;i++){
        if(check(pHash,sHash)) res.push(i)
        if(i+pLen<sLen){
            sHash[s[i].charCodeAt()-97]--
            sHash[s[i+pLen].charCodeAt()-97]++
        }
    }
    function check(arr1,arr2){
        for(let i=0;i<arr1.length;i++){
            if(arr1[i] != arr2[i]) return false
        }
        return true
    }
    return res
    //9ms with 93.18% upbeat the tc becomes somewhat like O(n+m)
}
// console.log(find_all_anagrams_in_a_string('cbaebabacd','abc'))
// console.log(find_all_anagrams_in_a_string('abab','ab'))
// console.log(find_all_anagrams_in_a_string('af','be'))
// console.log(find_all_anagrams_in_a_string('baa','aa'))

function permutation_in_string(s1,s2){
    if(s2.length < s1.length) return false
    let s1Hash = new Array(26).fill(0)
    let s2Hash = new Array(26).fill(0)
    let s1Len = s1.length
    let s2Len = s2.length
    for(let i=0;i<s1Len;i++) {
        s1Hash[(s1[i].charCodeAt()-97)]++
        s2Hash[(s2[i].charCodeAt()-97)]++
    }
    for(let i=0;i<=s2Len-s1Len;i++){
        if(check(s1Hash,s2Hash)) return true
        if(i+s1Len<s2Len){
            s2Hash[s2[i].charCodeAt()-97]--
            s2Hash[s2[i+s1Len].charCodeAt()-97]++
        }
    }
    function check(arr1,arr2){
        for(let i=0;i<arr1.length;i++){
            if(arr1[i] != arr2[i]) return false
        }
        return true
    }
    return false
    //4ms tc with 99.23% upbeat
}
// console.log(permutation_in_string('ab','eidbaooo'))
// console.log(permutation_in_string('ab','eidboaoo'))

function maximum_sum_of_distinct_sub_arrays_with_length_k(nums,k){
    // let maxSum=0
    // let len = nums.length
    // for(let i=0;i<=len-k;i++){
    //     let set = new Set()
    //     for(let j=i;j<i+k;j++){
    //         if(!set.has(nums[j])) set.add(nums[j])
    //     }
    //     if(set.size == k){
    //         maxSum = Math.max(maxSum,nums.slice(i,i+k).reduce((a,s)=>a+s,0))
    //     }
    // }
    // return maxSum
    //works but tle at 63/93 coz the tc is O(n^2)
    let maxSum=0
    let windowSum=0
    let set = new Set()
    let left=0

    for(let right =0;right<nums.length;right++){
        while(set.has(nums[right])){
            set.delete(nums[left])
            windowSum-=nums[left]
            left++
        }
        set.add(nums[right])
        windowSum+=nums[right]
        if(right-left+1 == k){
            maxSum = Math.max(maxSum,windowSum)
            set.delete(nums[left])
            windowSum-=nums[left]
            left++
        }
    }
    return maxSum
    //56ms with 71.20% beat
}
// console.log(maximum_sum_of_distinct_sub_arrays_with_length_k([1,5,4,2,9,9,9],3))
// console.log(maximum_sum_of_distinct_sub_arrays_with_length_k([4,4,4],3))
// console.log(maximum_sum_of_distinct_sub_arrays_with_length_k([1,1,1,7,8,9],3))

function substring_with_concatenation_of_all_words(s,words){
    let concatString = words.join('')
    if(concatString.length > s.length) return []
    let concatStringLength = concatString.length
    let sLen = s.length
    let wLen = words.length
    let res=[]
    let map = new Map()
    for(let i=0;i<=sLen-concatStringLength;i++){
        let slice = s.slice(i,i+concatStringLength)
        let c=0
        for(let word of words) map.set(word,(map.get(word) || 0)+1)
        for(let j=0;j<wLen;j++){
            if(map.get(words[j])>0 && slice.includes(words[j])){
                map.set(words[j],(map.get(words[j]) || 1)-1)
                c++
            }
        }
        console.log(map)
        if(c==wLen) res.push(i)
        map.clear()
    }
return res
}
// console.log(substring_with_concatenation_of_all_words('barfoothefoobarman',['foo','bar']))
console.log(substring_with_concatenation_of_all_words('wordgoodgoodgoodbestword',['word','good','best','word']))
// console.log(substring_with_concatenation_of_all_words('barfoofoobarthefoobarman',['bar','foo','the']))