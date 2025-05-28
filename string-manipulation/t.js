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

function find_index_of_first_occurence_in_a_string(haystack,needle){
    let k=needle.length
    if(k===0)return 0
    for(let i=0;i<=haystack.length;i++){
        if(haystack.substring(i,i+k)===needle) return i
    }
    return -1
}

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