const findAnagrams = (s, p)=> {
    // let set = new Set(p.split(''))
    let res=[]
    let pLen = p.length
    for(let i=0;i<=s.length-pLen;i++){
        let c=0
        let map = new Map()
        for(let f of p){
            map.set(f,(map.get(f) || 0)+1)
        }
        for(let j=i;j<i+pLen && j<s.length;j++){
            if(map.has(s[j]) && map.get(s[j])>0) {
                c++
                map.set(s[j],map.get(s[j])-1)
            }
        }
        if(c==pLen) res.push(i)
    }
    return res
    //works but tle at 33/65 cases
};
// console.log(findAnagrams('cbaebabacd','abc'))
// console.log(findAnagrams('baa','aa'))

function find_lucky_stone_pairs(p,n,m,stones){
    let pairCount=0
    for(let i=0;i<p-1;i++){
        for(let j=i+1;j<p;j++){
            if((stones[i]%n==0 || stones[i]%m==0) && (stones[j]%n==0 || stones[j]%m==0)){
                console.log(stones[i],stones[j])
                pairCount++
            }
        }
    }
    return pairCount
    // let valid = stones.filter(x => x % n === 0 || x % m === 0);
    // let count = valid.length;
    // return (count * (count - 1)) / 2;
}
// console.log(find_lucky_stone_pairs(5,2,3,[6,9,12,15,18]))

var compose = function(functions) {
    return function(x) {
        if(!functions.length) return x
        // let val=functions[functions.length-1](x);
        for(let i=functions.length-1;i>=0;i--){
            x=functions[i](x)
        }
        return x
    }
};
// const fn = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn(4))
// 70ms with 5.8% beat || next one 62ms with 12.07% beat
