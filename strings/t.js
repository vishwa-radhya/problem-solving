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
// console.log(longest_common_prefix(["flower","flow","flight"]))
// console.log(longest_common_prefix(["dog","racecar","car"]))

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

function string_to_integer_atoi(s){
    let str=''
    function matchWords(c){
        return (c>='a' && c<='z') || (c>='A' && c<='Z');
    }
    function matchNumbers(c){
        // return ()
    }
    if(matchWords(s[0])){
        return 0
    }
    // for(let i=0;i<s.length;i++){
    //     if(matchWords(s[i])){
    //         break;
    //     }
    //     while(i<s.length && )
    // }

}
// console.log(string_to_integer_atoi('42'))
// console.log(string_to_integer_atoi('  -042'))
// console.log(string_to_integer_atoi("1337c0d3"))
// console.log(string_to_integer_atoi('0-1'))
// console.log(string_to_integer_atoi('words  and 987'))
function largest_odd_number_in_string(num){
    let res=''
    for(let i=num.length-1;i>=0;i--){
        if((Number(num[i])%2!=0)){
            res+=num.slice(0,i+1)
            break
        }
    }
    return res
}
// console.log(largest_odd_number_in_string('52'))
// console.log(largest_odd_number_in_string('4206'))
// console.log(largest_odd_number_in_string('35427'))
function valid_anagram(s,t){
    // if(s.length !== t.length) return false
    // return s.split('').sort().join('') == t.split('').sort().join('')
    // 31ms tc beats 20%
    // if(s.length !== t.length) return false
    // let hash=new Array(26).fill(0)
    // for(let i=0;i<s.length;i++){
    //     hash[s[i].charCodeAt(0)-'a'.charCodeAt(0)]++
    //     hash[t[i].charCodeAt(0)-'a'.charCodeAt(0)]--
    // }
    // for(let i=0;i<26;i++){
    //     if(hash[i]!=0){
    //         return false
    //     }
    // }
    // return true
    // 6ms in js and 4ms in java
    //using modern js
    for(let i=0;i<s.length;i++){
        hash[s[i].charCodeAt(0)-97]++
        hash[t[i].charCodeAt(0)-97]--
    }
    return hash.every(e=>e==0)
}
// console.log(valid_anagram('anagram','nagaram'))
// console.log(valid_anagram('rat','car'))

function sentence_is_panagram(sentence){
    if(sentence.length<26) return false
    let hash=new Array(26).fill(0)
    for(let i=0;i<sentence.length;i++){
        hash[((sentence[i].charCodeAt(0)-97)%26)]++
    }    
    return hash.every(e=>e!==0)
    //1ms in js and 2ms in java
    //another approaches
    // const alphabet = [
    //     'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    //     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    // ];
    // for(let char of alphabet){
    //     if(!sentence.includes(char)) return false
    // }
    // return true
    // let set = new Set();
    // for(let i=0; i<sentence.length; i++){
    //     set.add(sentence.charAt(i))
    // }
    // if(set.size===26) return true;
    // else return false;
}   
// console.log(sentence_is_panagram("thequickbrownfoxjumpsoverthelazydog"));

function valid_parentheses(s){
    let stack=[]
    let chk={
        '(':')',
        '{':'}',
        '[':']'
    }
    let top=-1
    for(let i=0;i<s.length;i++){
        if(s[i]==='(' || s[i]==='{' || s[i]==='['){
            stack.push(s[i])
            top++            
        }else{
            if(top<0){
                return false
            }else{
                let topEle = stack[top]
                if(chk[topEle]===s[i]){
                    stack.pop()
                    top--
                }else{
                    return false
                }
            }
        }        
    }
    return top<0 ? true : false;
}
// 2ms tc 
// console.log(valid_parentheses('()'));
// console.log(valid_parentheses('()[]{}'));
// console.log(valid_parentheses('(]'));
// console.log(valid_parentheses('([])'));
function length_of_last_word(s){
    // let ar =s.trim().split(' ')
    //  return ar[ar.length-1].length
    // 0ms beats 100%
    function matcher(c){
        return ((c>='a' && c<='z')||(c>='A' && c<='Z'))
    }
    let len =0
    let i=s.length-1
        while(i>=0 && !matcher(s[i])) i--
    while(i>=0 && matcher(s[i])){
        len++
        i--
    }
    return len
    //also beats 100% with 0ms tc
}
// console.log(length_of_last_word("Hello World"))
// console.log(length_of_last_word(" fly me to the moon "))
function zig_zag_conversion(s,numRows){
//     if(numRows==1) return s
//    let res=''
//    for(let row=0;row<numRows;row++){
//     let increment = (numRows-1)*2
//     for(let i=row;i<s.length;i+=increment){
//         res+=s[i]
//         if(row>0 && row<numRows-1 && (i+increment-2*row)<s.length){
//             res+=s[i+increment-2*row]
//         }
//     }
//    }
//    return res
   //1ms tc with 99% beats
   //another approach feels diff and crazy though 
   if(numRows==1) return s
   let res=[]
   for(let i=0;i<numRows;i++){
    res.push('');
   }
   let currentRow=0
   let goingDown=false
   for(let char of s){
    console.log(currentRow)
    res[currentRow]+=char
    // at top and bottom row change direction
    if(currentRow ==0 || currentRow == numRows-1 ){
        goingDown=!goingDown
    }
    currentRow+=goingDown ? 1 : -1
   }
   return res.join('')
}
// console.log(zig_zag_conversion("PAYPALISHIRING",3));
// console.log(zig_zag_conversion("PAYPALISHIRING",4));
