function group_anagrams(strs){
    // if(strs.length ==1) return [strs]
    // let map = new Map()
    // let rtn=[]
    // let k=0
    // for(let i=0;i<strs.length;i++){
    //     let val = computeVal(strs[i])
    //     if(map.has(val)){
    //         rtn[map.get(val)].push(strs[i])
    //     }else{
    //         map.set(val,k)
    //         rtn[k]=[]
    //         rtn[k].push(strs[i])
    //         k++
    //     }
    // }
    // function computeVal(str){
    //     return str.split('').sort().join('')
    // }
    // return rtn
    //24ms with 88% beat
    let map=new Map();
    for(let str of strs){
    let sorted= str.split("").sort().join("");
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
            map.get(sorted).push(str);
    
    }
    console.log(map)
    return Array.from(map.values());
    //19ms upbeat
}
// console.log(group_anagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(group_anagrams([""]));
// console.log(group_anagrams(["a"]));

function reorganizeStrings(s){
    let countArr = new Array(26).fill(0)
    for(let ch of s){
        countArr[ch.charCodeAt()-97]++
    }
    let maxCharCount=0
    let maxChar='a'
    for(let i=0;i<countArr.length;i++){
        if(countArr[i]>maxCharCount){
            maxCharCount=countArr[i]
            maxChar=String.fromCharCode(97+i)
        }
    }
    if(maxCharCount > ((s.length+1)/2)){
        return ''
    }
    let rtn =[]
    let index=0
    while(countArr[maxChar.charCodeAt()-97]>0){
        rtn[index]=maxChar
        index+=2
        countArr[maxChar.charCodeAt()-97]--
    }
    for(let i=0;i<26;i++){
        while(countArr[i]>0){
            if(index>=s.length){
                index=1
            }
            rtn[index]=String.fromCharCode(97+i)
            index+=2
            countArr[i]--
        }
    }
    return rtn.join('')
    //1ms with 94.53% beat with O(n) tc

}
// console.log(reorganizeStrings('aab'))
// console.log(reorganizeStrings('aaab'))
// console.log(reorganizeStrings('vlovv'))

function longest_consecutive_sequence(nums){
    if(!nums.length) return 0
    let set = Array.from(new Set(nums)).sort((a,b)=>a-b)
    let maxConsecSeq=1
    let currentMaxConsecSeq=1
    for(let i=0;i<set.length-1;i++){
        if(set[i]+1==set[i+1]){
            currentMaxConsecSeq++
        }else{
            maxConsecSeq = Math.max(maxConsecSeq,currentMaxConsecSeq)
            currentMaxConsecSeq=1
        }
    }
    maxConsecSeq = Math.max(currentMaxConsecSeq,maxConsecSeq)
    return maxConsecSeq
    // worked with 47ms and 24.93% beat
}

// console.log(longest_consecutive_sequence([100,4,200,1,3,2]))
// console.log(longest_consecutive_sequence([9,1,4,7,3,-1,0,5,8,-1,6]))

function number_of_matching_subsequences(s,words){
   // using two pointer approach
//    let count=0
//    for(let word of words){
//     if(isSubseq(word,s)){
//         count++
//     }
//    }
//    function isSubseq(word,s){
//     let i=0,j=0;
//     while(i<word.length && j<s.length){
//         if(word[i]==s[j]){
//             i++
//         }
//         j++
//     }
//     return i==word.length
//    }
//    return count
   // workable but tle takes O(n2)
    let map = new Map()
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])) map.set(s[i],[])
        map.get(s[i]).push(i)
    }
    let count =0
    function findFirstIndex(posArr,lastIndex){
        
    }
    for(let word of words){
        let lastIndex=-1
        let found=true
        for(let char of word){
            if(!map.has(char)){
                found=false
                break
            }
            lastIndex = findFirstIndex(map.get(char),lastIndex)
            if(lastIndex === someCondition){
                found=false
                break
            }
        }
        if(found) count++
    }
}
console.log(number_of_matching_subsequences('abcde',['a','bb','acd','ace']))
console.log(number_of_matching_subsequences('dsahjpjauf',["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]))