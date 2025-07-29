// this algorithm is used to efficiently solve the maximum sub-array problem
//the brute approach can be used by checking all the possibe subarrays and updating the max one but takes O(n^2) 
// but it ensures it can be solved with O(n) tc
// has only two opearions 
// 1. expand subarray
// 2. start with a new sub-array
/**
 * 4 scenarios
 * when subarray sum and the current element is checked
 * if 1. sum is +ve and current is +ve "extend" 
 * if 1. sum is -ve and current is +ve "new" 
 * if 1. sum is +ve and current is -ve "extend" 
 * if 1. sum is -ve and current is -ve "new" 
 */

function maximum_subarray(nums){
    let curSum=nums[0]
    let maxSum=nums[0]
    for(let i=1;i<nums.length;i++){
        curSum = Math.max(nums[i],curSum+nums[i])
        maxSum = Math.max(maxSum,curSum)
    }
    return maxSum
    //2ms with 72.56% beat
    // the 0ms works the same without using any in-built methods
    // let currSum = 0
    // let maxSum = nums[0]
    // for(let i=0; i<nums.length; i++){
    //     currSum += nums[i]
    //     if(currSum > maxSum) maxSum = currSum
    //     if(currSum < 0) currSum = 0
    // }
    // return maxSum
}
// console.log(maximum_subarray([-2,1,-3,4,-1,2,1,-5,4])) //6
// console.log(maximum_subarray([1])) //1
// console.log(maximum_subarray([1,-2,3,-2])) //1

// prerequisite for next one 
function maximum_produc_of_three_numbers(nums){
    // so if you have all positive then max product will be product of last three after sorting
    // if we have all negative the max product will be product of first one * second one and last number
    // so by finding maximum between lastThreeProduct and firstSecondLast gives maximumProduct
    // **************************
    // nums.sort((a,b)=>a-b)
    // return Math.max(nums[0]*nums[1]*nums[nums.length-1],nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3])
    //************************ */
    // gives 35ms with 65.56% beat
    // unemploying to inbuilt methods reduces the time complexity
    // its generally finding max1,max2,max3 and min1,min2
    //and computing max between max1*max2*max3 and min1*min2*max1
    let max1=-Infinity,max2=-Infinity,max3=-Infinity
    let min1 = Infinity,min2=Infinity
    for(let num of nums){
        if(num > max1){
            [max3,max2,max1]=[max2,max1,num]
        }else if(num>max2){
            [max3,max2]=[max2,num]
        }else if(num>max3){
            max3=num
        }
        if(num<min1){
            [min2,min1]=[min1,num]
        }else if(num<min2){
            min2=num
        }
    }
    let s1 = max1*max2*max3
    let s2 = min1*min2*max1
    return s1>s2 ? s1 :s2
    //15ms with 76.79% beat
    // the most optimized upbeat is by optimizing the above approach
    // using manual line by line assignment in conditions
    //and using index based array access
}
// console.log([1,2,3]) // 6

function maximum_product_subarray(nums){
  
}
// console.log(maximum_product_subarray([2,3,-2,4])) // 6
// console.log(maximum_product_subarray([-2,0,-1])) // 0
// console.log(maximum_product_subarray([-2,3,-4])) // 24