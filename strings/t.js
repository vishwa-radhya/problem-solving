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
    let hash=new Array(26).fill(0)
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
function rotate_string(s,goal){
    if(s.length !== goal.length) return false
    return (s+s).includes(goal)
    //0ms 
    // let output = ""
    // let temp = 0

    // if (s.length !== goal.length) return false

    // for (let i = 0; i < s.length; i++) {
    //     let v1 = s.slice(0, i);
    //     let v2 = s.slice(i);
    //     let output = v2 + v1;
    //     if (output === goal) {
    //         return true;
    //     }
    // }
    // return false;
}
// console.log(rotate_string("abcde","cdeab"))  
function romanToInteger(s){
    let obj={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    let ans=0
    for(let i=0;i<s.length;i++){
        let s1 = obj[s[i]]
        if(i+1<s.length){
            let s2 =obj[s[i+1]]
            if(s1>=s2){
                ans+=s1
            }else{
                ans-=s1
            }
        }else{
            ans+=s1
        }
    }
    return ans

}
// console.log(romanToInteger('III'))
// console.log(romanToInteger('VI'))
// console.log(romanToInteger('IV'))
// console.log(romanToInteger('MCMXCIV'))
function multiplyStrings(num1,num2){
    //  return String(BigInt(num1)*BigInt(num2))  
    const n = num1.length, m = num2.length;
    const result = Array(n + m).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    while (result[0] === 0 && result.length > 1) result.shift();
    return result.join('');
}
// console.log(multiplyStrings("5","10"));
function addBinary(a,b){
    let aDecimal=0;
    let bDecimal=0;
    let k=0;
    for(let i= a.length-1;i>=0;i--){
        // aDecimal+=(a[i]-'0')*(2**k)
        aDecimal+=Number(a[i])*(2**k)
        k++
        // can use parseInt()
    }
    k=0;
    for(let i= b.length-1;i>=0;i--){
        // bDecimal+=(b[i]-'0')*(2**k)
        bDecimal+=Number(b[i])*(2**k)
        k++
    }
    console.log(aDecimal)
    console.log(bDecimal)
    let sum = aDecimal+bDecimal;
    if(sum==0){
        return "0"
    }
    let binary=''
    while(sum>0){
        binary=(sum%2)+binary;
        sum=Math.floor(sum/2);
    }
    // return binary
}
// console.log(addBinary("11","1"))
// console.log(addBinary("1010","1011"))
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

function number_of_segments_in_a_string(s){
   s=s.trim()
   if(s.length==0) return 0
    let count=0
    for(let i=0;i<s.length-1;i++){
        if(Boolean(s[i].match(/\s/)) && Boolean(!s[i+1].match(/\s/))){
            count++
        }
    }
    return count+1
}
// console.log(number_of_segments_in_a_string("Hello, my name is John"));
// console.log(number_of_segments_in_a_string("Hello,     John"));
// console.log(number_of_segments_in_a_string("  Hello  ,  ,     "));
// console.log(number_of_segments_in_a_string(", , , ,  a, eaefa"));

function reverse_wods_in_a_string(s){
    // return s.trim().split(' ').map(e=>e.split('').reverse().join('')).join(' ')
    s=s.trim().split('')
    let i=0,k=0
    for(let j=0;j<s.length;j++){
        while(j<s.length && !findWhiteSpace(s[j])) j++
        k=j-1
        // console.log(i,j,k)
        while(i<=k){
            let t =s[i]
            s[i]=s[k]
            s[k]=t
            i++
            k--
        }
        i=j+1
        j++
    }
    function findWhiteSpace(c){
        return /\s/.test(c)
    }
    return s.join('')
}
console.log(reverse_wods_in_a_string("Let's take LeetCode contest"))
