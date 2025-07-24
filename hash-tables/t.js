function two_sum(nums,target){
    // let map = new Map();
    // for(let i=0;i<nums.length;i++){
    //     map.set(nums[i],i)
    // }
    // for(let i=0;i<nums.length;i++){
    //     let rem = target-nums[i]
    //     let val = map.get(rem)
    //     if(val && val!=i){
    //         return [i,map.get(rem)]
    //     }
    // }
    // took 45ms with brute force now 6ms with map(hash map)
    // but by doing both setting and checks on the fly we can even reduce it
    let map = new Map()
    let res=[]
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i]
        if(map.has(diff)){
            res=[map.get(diff),i]
        }else{
            map.set(nums[i],i)
        }
    }
    return res
    // now its 1ms
}
// console.log( two_sum([2,7,11,15],9) );
// console.log( two_sum([3,2,4],6) );
// console.log( two_sum([1,3,4,2],6) );

//1189
function maximum_number_0f_balloons(text){
    // let set=new Set(['b','a','l','o','n'])
    // let map = new Map()
    // let count =0
    // for(let t of text){
    //     if(set.has(t)){
    //         if(!map.get(t)){
    //             map.set(t,1)
    //         }else{
    //             map.set(t,map.get(t)+1)
    //         }
    //         count++
    //     }
    // }
    // if(map.size!=5) return 0
    // let balloonCount=0 
    // while(count>0){
    //     let c=0
    //     for(let [key,val] of map){
    //         if(val<=0){
    //             return balloonCount
    //         }
    //         if((key == 'l' || key=='o') && val>=2){
    //             map.set(key,val-2)
    //             count-=2
    //             c+=2
    //         }else{
    //             map.set(key,val-1)
    //             count-=1
    //             c+=1
    //         }
    //     }
    //     if(c==7){
    //         balloonCount++
    //     }
    //     c=0
    // }
    // return balloonCount
    //gives 10ms tc with beat 20%
    // let balloonCount=0
    // let dict={
    //     'b':0,'a':0,'l':0,'o':0,'n':0
    // }
    // for(let i=0;i<text.length;i++){
    //     if(text[i] in dict){
    //             dict[text[i]]+=1
    //     }
    // }
    // const match = 'balloon';
    // while(true){
    //     for(let i=0;i<match.length;i++){
    //         if(dict[match[i]]>0){
    //             dict[match[i]]-=1
    //         }else{
    //             return balloonCount
    //         }
    //     }
    //     balloonCount++
    // }
    //5ms tc with 79% beat
    // this below one giving 0ms tc lol some random guessed thought
    // let balloonMap = {
    //     'b': 0,
    //     'a': 0,
    //     'l': 0,
    //     'o': 0,
    //     'n': 0
    // }
    // for(let letter of text) {
    //     if('balon'.includes(letter)) {
    //         balloonMap[letter] += 1
    //     }
    // }
    // let maximumInstance = Number.MAX_VALUE
    // maximumInstance = Math.min(maximumInstance, balloonMap['b'])
    // maximumInstance = Math.min(maximumInstance, balloonMap['a'])
    // maximumInstance = Math.min(maximumInstance, Math.floor(balloonMap['l'] / 2))
    // maximumInstance = Math.min(maximumInstance, Math.floor(balloonMap['o'] / 2))
    // maximumInstance = Math.min(maximumInstance, balloonMap['n'])
    
    // return maximumInstance
}
// console.log(maximum_number_0f_balloons("nlaebolko"))
// console.log(maximum_number_0f_balloons("loonbalxballpoon"))
// console.log(maximum_number_0f_balloons("leetcode"))
// console.log(maximum_number_0f_balloons("balllllllllllloooooooooon"))


//205. isomorphic strings
function isIsomorphic(s,t){
    // if(s.length !== t.length) return false
    // let sAr=[]
    // let tAr=[]
    // let map1 =new Map()
    // let map2 =new Map()
    // for(let i=0;i<s.length;i++){
    //     let val = map1.get(s[i])
    //     if(val){
    //         sAr.push(val)
    //     }else{
    //         sAr.push(i+1)
    //         map1.set(s[i],i+1)
    //     }
    // }
    // for(let i=0;i<t.length;i++){
    //     let val = map2.get(t[i])
    //     if(val){
    //         tAr.push(val)
    //     }else{
    //         tAr.push(i+1)
    //         map2.set(t[i],i+1)
    //     }
    // }
    // for(let i=0;i<sAr.length;i++){
    //     if(sAr[i]!==tAr[i]){
    //         return false
    //     }
    // }
    // return true
    // 6ms tc with 6ms beat
    //try optimizing 
    // if(s.length !== t.length) return false
    // let sAr=[]
    // let tAr=[]
    // let map1 =new Map()
    // let map2 =new Map()
    // for(let i=0;i<s.length;i++){
    //     let val = map1.get(s[i])
    //     if(val){
    //         sAr.push(val)
    //     }else{
    //         sAr.push(i+1)
    //         map1.set(s[i],i+1)
    //     }
    // }
    // for(let i=0;i<t.length;i++){
    //     let val = map2.get(t[i])
    //     if(val){
    //         tAr.push(val)
    //     }else{
    //         tAr.push(i+1)
    //         map2.set(t[i],i+1)
    //     }
    //     if(sAr[i]!=tAr[i]){
    //         return false
    //     }
    // }
    // return true
    // works the same just eliminated a loop'
    // now with single loop
    if(s.length != t.length) return false
    let sO={}
    let tO={}
    for(let i=0;i<s.length;i++){
        if(sO[s[i]]!==tO[t[i]]) return false
        sO[s[i]]=i
        tO[t[i]]=i
    }
    return true
    // most optimized one above
}
// console.log(isIsomorphic('egg','add'))
// console.log(isIsomorphic('foo','bar'))
// console.log(isIsomorphic('paper','title'))

// 1512 
function number_of_good_pairs(nums){
    // let count=0
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i] == nums[j]) count++
    //     }
    // }
    // return count
    // brute force approach gave 1ms tc with beat 43%
    // i found a math that if a number appears n times n(n-1)//2 good 
    // pairs can be made through it
    let count=0
    let obj={}
    for(let i=0;i<nums.length;i++){
        obj[nums[i]] = (obj[nums[i]] || 0)+1
    }
    for(let val of Object.values(obj)){
        count+=Math.floor((val*(val-1))/2)
    }
    return count
    // 0ms tc with 100% beat
} 
// console.log(number_of_good_pairs([1,2,3,1,1,3]));
// console.log(number_of_good_pairs([1,1,1,1]));
// console.log(number_of_good_pairs([1,2,3  ]));

function ransom_note(ransomNote,magazine){
    // let obj = {}
    // for(let i=0;i<magazine.length;i++){
    //     obj[magazine[i]] = (obj[magazine[i]] || 0)+1
    // }
    // for(let i=0;i<ransomNote.length;i++){
    //     let char = ransomNote[i]
    //     if((!obj[char]) || obj[char]<=0){
    //         return false
    //     }
    //     obj[char]=obj[char]-1
    // }
    // return true
    // 19ms with 52% beat
    // found another crazy one with less tc
    // for(let char of magazine){
    //     ransomNote = ransomNote.replace(char,'')
    // }
    // return !ransomNote ? true :false
    // has 8ms tc with 93% beat
    // for(let char of ransomNote){
    //     let index = magazine.indexOf(char)
    //     if(index===-1) return false
    //     magazine = magazine.slice(0, index) + magazine.slice(index + 1);
    // }
    // return true
    // the 4ms approach
    // doing the 19ms approach with a array of 26 len gives 0ms lol
    // let hash=new Array(26).fill(0)
    // for(let i=0;i<magazine.length;i++){
    //     hash[magazine.charCodeAt(i)-97]+=1
    // }
    // for(let i=0;i<ransomNote.length;i++){
    //     if(hash[ransomNote.charCodeAt(i)-97]==0) return false
    //     hash[ransomNote.charCodeAt(i)-97]-=1
    // }   
    // return true
}
// console.log(ransom_note('a','b'));
// console.log(ransom_note('aa','ab'));
// console.log(ransom_note('aa','aab'));
// console.log(ransom_note('aab','baa'));

// 219 contains duplicate ii
function contains_duplicate_2(nums,k){
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<=i+k && j<nums.length;j++){
    //         if(nums[i]==nums[j]) return true
    //     }
    // }
    // return false
    // 793ms tc beat 5.48%
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
        if(set.size>k){
            set.delete(nums[i-k])
        }
    }
    return false
    // 22ms 2ith 84% beat
    // using map
    // let map = new Map()
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i]) && i-map.get(nums[i])<=k){
    //         return true
    //     }
    //     map.set(nums[i],i)
    // }
    // return false
    //32 ms with 50% beat
}
// console.log(contains_duplicate_2([1,2,3,1],3))
// console.log(contains_duplicate_2([1,0,1,1],1))
// console.log(contains_duplicate_2([1,2,3,1,2,3],2))
// console.log(contains_duplicate_2([99,99],2))
// console.log(contains_duplicate_2([1,2,3,4,5,6,7,8,9,9],3))



// 706. design hashMap
let myHashMap = function(){
    this.map={}
}
myHashMap.prototype.put=function(key,value){
    this.map[key]=value
}
myHashMap.prototype.get=function(key){
    return this.map[key] ?? -1
}
myHashMap.prototype.remove=function(key){
    delete this.map[key]
}
// with 27ms tc and 81.33% beat

// got another 25ms with 90.56% beat by introducing a small change in get function 
// return this.map.getOwnProperty(key) ? this.map.[key] : -1

//the 21ms sol with self built hashMap
// var MyHashMap = function() {
//     this.size = 1000;
//     this.buckets = new Array(this.size); 
// };

// /**
//  * Private method to compute bucket index from key.
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.getBucketIndex = function(key) {
//     return key % this.size;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function(key, value) {
//     const bucketIndex = this.getBucketIndex(key);
//     let bucket = this.buckets[bucketIndex]; 
//     if (!bucket) {
//         this.buckets[bucketIndex] = [];
//         bucket = this.buckets[bucketIndex];
//     }

//     for (let pair of bucket){
//         if (pair[0] === key){
//             pair[1] = value;
//             return
//         }
//     }

//     bucket.push([key, value]);
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function(key) {
//     const bucketIndex = this.getBucketIndex(key);
//     const bucket = this.buckets[bucketIndex]; 

//     if (!bucket) {
//         return -1;
//     }

//     for (let pair of bucket) {
//         if (pair[0] === key) return pair[1];
//     }
//     return -1;
// };

// /** 
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function(key) {
//     const bucketIndex = this.getBucketIndex(key);
//     const bucket = this.buckets[bucketIndex]; 
//     if (!bucket) return;

//     for(let i = 0; i < bucket.length; i++){
//         if (bucket[i][0] === key){
//             bucket.splice(i,1)
//         }
//     }
// };

/**
 * MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 */

/**
 * Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]
 */

/**
 * Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1);    // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2);    // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1,1]]
 */

