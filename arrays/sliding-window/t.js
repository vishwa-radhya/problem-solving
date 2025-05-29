function best_time_to_buy_and_sell_stocks(prices){
    /**
     * time limit exceeded for large dataset
     */
    // let max=0
    // for(let i=0;i<prices.length;i++){
    //     let cur=prices[i]
    //     for(let j=i+1;j<prices.length;j++){
    //         if((prices[j]-cur)>max){
    //             max=prices[j]-cur
    //         }
    //     }
    // }
    // return max
    /***
     * most optimized sliding window type with two pointers
     */
    let i=0
    let j=1
    let max=0
    while(j<prices.length){
        if(prices[i]<prices[j]){
            let profit = prices[j]-prices[i]
            max = Math.max(profit,max)
        }else{
            i=j
        }
        j++
    }
    return max
    /**
     * another solvable approach
     * // let buy = prices[0]
    // let ans=0
    // for(let i=1;i<prices.length;i++){
    //     buy = Math.min(buy,prices[i])
    //     ans = Math.max(ans,prices[i]-buy)
    // }
    // return ans
     */
}
// console.log(best_time_to_buy_and_sell_stocks([7,1,5,3,6,4]))
// console.log(best_time_to_buy_and_sell_stocks([2,4,1]))
