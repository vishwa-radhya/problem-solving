// move zeroes to end
function move_zeroes_to_end(arr){
    let left=0
    for(let right=0;right<arr.length;right++){
        if(arr[right]!==0){
            let t=arr[left]
            arr[left]=arr[right]
            arr[right]=t
            left++
        }
    }
    console.log(arr);
}
// move_zeroes_to_end([1,0,2,0,3,3,0,2,1])

/**
 * remove duplicates from sorted array
 */
// using extra space
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

function sort_array_by_parity(arr){
    let k=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            let t=arr[k]
            arr[k]=arr[i]
            arr[i]=t
            k++
        }
    }
    console.log(arr);
}
// sort_array_by_parity([1,2,3,4,5])

function find_index_of_first_occurence_in_a_string_in_place(haystack,needle){
    let haystackLength=haystack.length
    let needleLength = needle.length
    if(needleLength===0)return 0
    for(let i=0;i<=haystackLength-needleLength;i++){
        let j=0
        while(j<needleLength && haystack[i+j]===needle[j]){
            j++
        }
        if(j===needleLength) return i
    }
    return -1
}
// console.log(find_index_of_first_occurence_in_a_string_in_place('leetcode','leeto'))
function reverse_string(s){
    let i=0
    let j=s.length-1
    while(i<j){
        let t=s[i]
        s[i]=s[j]
        s[j]=t
        i++
        j--
    }
    return s
}
// console.log(reverse_string(['h','e','l','l','o']))
function reverse_vowels(s){
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    let i=0
    let j=s.length-1
    let se=s.split('')
    while(i<j){
        if(!vowels.includes(s[i])){
            i++
        }
        else if(!vowels.includes(s[j])){
            j--
        }
        else{
            // let t=se[i]
            // se[i]=se[j]
            // se[j]=t
            [se[i],se[j]]=[se[j],se[i]]
            i++
            j--
        }
    }
    return se.join('')
}
// console.log(reverse_vowels('IceCreAm'))
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

function best_time_to_buy_and_sell_stocks(prices){
    /**
     * time limit exceeded for large dataset
     */
    // let max=0
    // for(let i=0;i<prices.length;i++){
    //     let cur=prices[i]
    //     for(let j=i+1;j<prices.length;j++){
    //         if((prices[j]-cur)>max){
    //             max=prices[j]-cur
    //         }
    //     }
    // }
    // return max
    /***
     * most optimized sliding window type with two pointers
     */
    let i=0
    let j=1
    let max=0
    while(j<prices.length){
        if(prices[i]<prices[j]){
            let profit = prices[j]-prices[i]
            max = Math.max(profit,max)
        }else{
            i=j
        }
        j++
    }
    return max
    /**
     * another solvable approach
     * // let buy = prices[0]
    // let ans=0
    // for(let i=1;i<prices.length;i++){
    //     buy = Math.min(buy,prices[i])
    //     ans = Math.max(ans,prices[i]-buy)
    // }
    // return ans
     */
}
// console.log(best_time_to_buy_and_sell_stocks([7,1,5,3,6,4]))
// console.log(best_time_to_buy_and_sell_stocks([2,4,1]))
