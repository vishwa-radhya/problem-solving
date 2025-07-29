function plus_one(digits){
    // return (BigInt(digits.join(''))+BigInt(1)).toString().split('').map(e=>Number(e))
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]+=1
            return digits
        }
        digits[i]=0
    }
    digits=Array(digits.length+1).fill(0)
    digits[0]=1
    return digits
    //bigint one gives 1ms
    //the above one gives 0ms
}
// console.log(plus_one([1,2,3]))
// console.log(plus_one([1,2,9]))
// console.log(plus_one([9]))
function happy_number(n){
    // let set = new Set()
    // while(n!==1){
    //     let val=0
    //     while(n>0){
    //         let lastNum = n%10;
    //         val+=lastNum*lastNum
    //         n=Math.floor(n/10)
    //     }
    //     console.log(val)
    //     n=val
    //     if(set.has(n)){
    //         return false
    //     }
    //     set.add(n)
    // }
    // return true
    //42ms with 6.23% beat
    //the 3ms one with js 
    const obj = {};
    while (n !== 1) {
        n = n.toString().split("").map(n => Number(n)).reduce((acc, curr) => acc + (curr * curr), 0);
        if (obj.hasOwnProperty(n)) return false;
        obj[n] = null;
    }
    // console.log(obj)
    return true;
}
// console.log(happy_number(19))
// console.log(happy_number(4))
// console.log(happy_number(2))