function is_subsequence(s,t){
    let r=''
    let k=0
    let p=s[k]
    let sLen = s.length
    for(let i=0;i<t.length;i++){
        if(t[i]===p){            
            if(k<sLen){
                r+=t[i]
                p=s[++k]
            }else{
                break
            }
        }
    }
    return r === s
}
// console.log(is_subsequence('abc','ahbgdc'));

function is_palindrome(s){
    let r=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    return r==r.split('').reverse().join('')
}

function is_palindrome_optimized(s){
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) { left++ }
        while (left < right && !isAlphaNumeric(s[right])) { right-- }
        const leftChar = s[left].toLowerCase()
        const rightChar = s[right].toLowerCase()
        if (leftChar !== rightChar) {
            return false
        }
        left++;
        right--;
    }
    return true;
}
const isAlphaNumeric = (c) => {
    return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}
// console.log(is_palindrome_optimized('A man, a plan, a canal: Panama'));

function longest_common_prefix(strs){
    let res=''
    for(let i=0;i<strs[0].length;i++){
        // for(let s of strs){
        //     if(i===s.length || s[i]!==strs[0][i]){
        //         return res
        //     }
        // }
        // res+=strs[0][i]
        //this one beats 100%
        for(let j=0;j<strs.length;j++){
            let s=strs[j]
            if(i===s.length || s[i]!==strs[0][i]){
                return res
            }
        }
        res+=strs[0][i]
    }
    return res
}
console.log(longest_common_prefix(["flower","flow","flight"]))
console.log(longest_common_prefix(["dog","racecar","car"]))

function reverse_words(s){
    s=s.trim().split(' ').filter(e=>e!=='')
    let l=0
    let r=s.length-1
    while(l<r){
        let t = s[l]
        s[l]=s[r]
        s[r]=t
        l++
        r--
    }
    return s.join(' ')
}
// console.log(reverse_words("the sky is blue"))
// console.log(reverse_words("  hello world  "))
// console.log(reverse_words("a good   example"))