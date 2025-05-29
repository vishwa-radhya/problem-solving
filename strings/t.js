function is_subsequence(s,t){
    let j=0
    let r=''
    for(let i=0;i<s.length;i++){
       let c=s[i]
       for(let k=j;j<t.length;j++){
            if(s[k]===c){
                r+=c
                j=k
                break
            }
       }
    }
    if(s!==r) return false
    return true
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
