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
    let obj={}
    for(let t of text){
        obj[t] = (obj[t] || 0)+1
    }
    let set=new Set(['b','a','l','o','n'])
    let objArray = Object.entries(obj).filter(([key,])=>set.has(key))
    if(objArray.length!=5){
        return 0
    }
    console.log(objArray);
    
    let count=0
    for(let [key,val] of objArray){
        if(key=='l' || key=='o'){
            count+=Math.floor(val/2)
        }else{
            count+=val
        }
    }
    return Math.floor(count/5)
}
// console.log(maximum_number_0f_balloons("nlaebolko"))
// console.log(maximum_number_0f_balloons("loonbalxballpoon"))
// console.log(maximum_number_0f_balloons("leetcode"))
console.log(maximum_number_0f_balloons("balllllllllllloooooooooon"))

