function search_in_sorted_array(nums,target){
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i
        }
    }
    return -1
    // worked fine with 0ms and beats 100%
}
// console.log(search_in_sorted_array([4,5,6,7,0,1,2],0));

function find_first_and_last_pos_of_element_in_sorted_array(nums,target){
    // let ar=[]
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]===target){
    //         ar.push(i)
    //     }
    // }
    // return ar.length ? ar.length===1 ? [ar[0],ar[0]] :[ar[0],ar[ar.length-1]] : [-1,-1];
    // 1ms at O(n) tc
    // optims
    // return [nums.findIndex(e=>e===target),nums.lastIndexOf(target)]
    //beats 100% but uses in built methods
    function findLeft(){
        let idx=-1;
        let i=0,j=nums.length-1;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(nums[mid]>=target) j=mid-1
            else i=mid+1
            if(nums[mid]===target) idx=mid
        }
        return idx
    }
    function findRight(){
         let idx=-1;
        let i=0,j=nums.length-1;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(nums[mid]<=target) i=mid+1
            else j=mid-1
            if(nums[mid]===target) idx=mid
        }
        return idx
    }
    return [findLeft(),findRight()]
    // works beats 100% with 0ms
};

// console.log(find_first_and_last_pos_of_element_in_sorted_array([5,7,7,8,8,10],8))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([5,7,7,8,8,10],6))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([],0))
// console.log(find_first_and_last_pos_of_element_in_sorted_array([1],1))
function rotate_image(matrix){

    // transposing th matrix row<->col
    //across diagnol
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix[i].length;j++){
            let t=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=t
        }
    }
    //now reverse each row 
    for(let i=0;i<matrix.length;i++){
        let mat=matrix[i];
        let k=0,j=mat.length-1
        while(k<j){
            let t = mat[k]
            mat[k]=mat[j]
            mat[j]=t
            k++
            j--
        }
    }

    return matrix
}
// console.log(rotate_image([[1,2,3],[4,5,6],[7,8,9]]))
function search_a_2d_matrix(matrix,target){
    // for(let i=0;i<matrix.length;i++){
    //     for(let j=0;j<matrix[i].length;j++){
    //         if(matrix[i][j]===target){
    //             return true
    //         }
    //     }
    // }
    // return false
    //works and beats 100% but has O(n^2) tc
    // we got rules like each row is sorted in non-decreasing order.
    // and The first integer of each row is greater than the last integer of the previous row.
    for(let i=0;i<matrix.length;i++){
        if(target>=matrix[i][0] && target<=matrix[i][matrix[i].length-1]){
            let left=0;
            let right=matrix[i].length-1;
            while(left<=right){
                let mid=Math.floor((left+right)/2);
                if(matrix[i][mid]===target){
                    return true
                }else if(target>=matrix[i][mid]){
                    left=mid+1;
                }else{
                    right=mid-1;
                }
            }
        }
    }
    return false
    // O(nlogn) works and beats 100%
    // down is the real js lol 
    // return matrix?.flat()?.includes(target);
}
// console.log(search_a_2d_matrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],1))

function summary_ranges(nums){
    if(!nums.length) return nums
    let len =nums.length;
    let res=[]
    let j=nums[0];   
    for(let i=0;i<len-1;i++){
        if(nums[i]+1!==nums[i+1]){
            if(j==nums[i]){
                res.push(`${j}`)
            }else{
                res.push(`${j}->${nums[i]}`)
            }
            j=nums[i+1]
        }
    }
    if(j==nums[len-1]){
        res.push(`${j}`)
    }else{
        res.push(`${j}->${nums[len-1]}`)
    }
    return res
}
// console.log(summary_ranges([0,2,3,4,6,8,9]))
// console.log(summary_ranges([0,1,2,4,5,7]))

function set_matrix_zeroes(matrix){
    let rows = matrix.length
    let cols=matrix[0].length
    let record =[]
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]==0){
                record.push([i,j])
            }
        }
    }
    for(let i=0;i<record.length;i++){
        let currentRecord = record[i];
        for(let j=0;j<rows;j++){
            matrix[j][currentRecord[1]]=0;
        }
        for(let j=0;j<cols;j++){
            matrix[currentRecord[0]][j]=0;
        }
    }
    return matrix;
    // works with 3ms tc and beats 59.11%
    //1ms in java 72.22% 
}
// console.log(set_matrix_zeroes([[1,1,1],[1,0,1],[1,1,1]]))
// console.log(set_matrix_zeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))

function sort_colors(nums){
    // where 0 is red, 1 is white,2 is blue
    // return nums.sort((a,b)=>a-b)
    // works with 1ms
    // another appraoch
    let left=0
    let right =nums.length-1
    let midpoint=0
    while(midpoint<=right){
        // console.log(left,midpoint,right)
        // console.log(nums)
        if(nums[midpoint]==0){
            let t = nums[left]
            nums[left]=nums[midpoint]
            nums[midpoint]=t
            left++
            midpoint++
        }else if(nums[midpoint]==1){
            midpoint++
        }
        else{
            let t = nums[midpoint]
            nums[midpoint]=nums[right]
            nums[right]=t
            right--
        }
    }
    return nums
}
// console.log(sort_colors([2,0,2,1,1,0]))

function find_most_frequent_vowel_and_consonant(s){
    let maxVowelCount=0
    let maxConsonantCount=0
    let vowelSet=new Set(['a','e','i','o','u'])
    let obj={}
    for(let letter of s){
        obj[letter]=(obj[letter] || 0)+1
    }
    let obAr = Object.entries(obj)
    for(let [key,val] of obAr){
        if(vowelSet.has(key) && val>maxVowelCount){
            maxVowelCount=val
        }else if(!vowelSet.has(key) && val>maxConsonantCount){
            maxConsonantCount=val
        }
    }
    return maxVowelCount+maxConsonantCount
}
// 7ms tc with beat 53.48%
// console.log(find_most_frequent_vowel_and_consonant("successes"));
// console.log(find_most_frequent_vowel_and_consonant("aeiaeia"));


function group_anagrams(strs){
    if(strs.length ==1) return [[strs[0]]]

}
console.log(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
// console.log(group_anagrams([""]))

function resultant_array_after_removing_anagrams(words){

}
// console.log(resultant_array_after_removing_anagrams(["abba","baba","bbaa","cd","cd"]))

function contains_duplicate_2(nums,k){
    //Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]===nums[j] && (Math.abs(i-j)<=k)){
    //             return true
    //         }
    //     }
    // }
    // return false
    // works but tle coz it is O(n^2)
    // let i=0;
    // let len =nums.length;
    // let j=1;
    // while(i<len-1){
    //     if(j>=len){
    //         i++ 
    //         j=i+1
    //     }
    //     if(nums[i]==nums[j] && Math.abs(i-j)<=k && i!=j){
    //         return true
    //     }else{
    //         j++
    //     }
    // }
    // return false
    //tle
    // let i=0;
    // let len =nums.length;
    // let j=len-1;
    // while(i<=j){
    //     if(j<=i){
    //         i++ 
    //         j=len-1
    //     }
    //     if(nums[i]==nums[j] && Math.abs(i-j)<=k && i!=j){
    //         return true
    //     }else{
    //         j--
    //     }
    // }
    // return false
    //tle
    /**
     * sifting to sliding window
     */
    // let set=new Set();
    // let i=0,j=k
    // let k=0
    // let len = nums.length
    // while(k<len-1){

    // }
}
// console.log(contains_duplicate_2([1,2,3,1],3))
// console.log(contains_duplicate_2([1,0,1,1],1))
// console.log(contains_duplicate_2([1,2,3,1,2,3],2))

function top_k_frequent_elements(nums,k){
    // let map = new Map()
    // for(let i=0;i<nums.length;i++){
    //     if(!map.has(nums[i])) map.set(nums[i],1)
    //     else map.set(nums[i],map.get(nums[i])+1)
    // }
    // let mapEntries = Array.from(map.entries()).sort((a,b)=>a[1]-b[1])
    // let rtn=[]
    // for(let i=mapEntries.length-1;i>mapEntries.length-1-k;i--){
    //     rtn.push(mapEntries[i][0])
    // }
    // return rtn
    // 7ms with 90.02% up beat
    // now the 4ms beat one looks clean and pure js 
    // const map = new Map()
    // nums.forEach(num=>{
    //     map.set(num,(map.get(num) || 0)+1)
    // })
    // return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map(arr=>arr[0])
    // the 3ms beat sol is the coolest one i have seen with js just reducing lines to js particularly
    return [...nums.reduce((m, n) => m.set(n, (m.get(n) || 0) + 1), new Map()).entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([key]) => key);
}
// console.log(top_k_frequent_elements([1,1,1,2,2,3],2))

function valid_sudoku(board){
    let set = new Set()
    //by row
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(!set.has(board[i][j])){
                set.add(board[i][j])
            }else{
                if(board[i][j]!='.'){
                    // console.log('hit at row check')
                    return false
                }
            }
        }
        set.clear()
    }
    // by col
    for(let i=0;i<9;i++){
        for(let j=0;j<9
            ;j++){
            if(!set.has(board[j][i])){
                set.add(board[j][i])
            }else{
                if(board[j][i]!='.'){
                    // console.log('hit at col check')
                    return false
                }
            }
        }
        set.clear()
    }
    // by box
    let indexArray =[[0,1,2],[3,4,5],[6,7,8]]
    for(let i=0;i<indexArray.length;i++){
        let curr = indexArray[i]
    // return true
        // let map1 = indexArray[0]
        // for(let j of curr){
        //     for(let k of map1){
        //         if(!set.has(board[j][k])){
        //             set.add(board[j][k])
        //         }else{
        //             if(board[j][k]!='.'){
        //                 // console.log('hit from',i,j,k)
        //                 return false
        //             }
        //         }
        //     }
        // }
        // set.clear()
        // let map2 = indexArray[1]
        // for(let j of curr){
        //     for(let k of map2){
        //         if(!set.has(board[j][k])){
        //             set.add(board[j][k])
        //         }else{
        //             if(board[j][k]!='.'){
        //                 // console.log('hit from',i,j,k)
        //                 return false
        //             }
        //         }
        //     }
        // }
        // set.clear()
        // let map3 = indexArray[2]
        // for(let j of curr){
        //     for(let k of map3){
        //         if(!set.has(board[j][k])){
        //             set.add(board[j][k])
        //         }else{
        //             if(board[j][k]!='.'){
        //                 // console.log('hit from',i,j,k)
        //                 return false
        //             }
        //         }
        //     }
        // }
        // set.clear()
        // runs with 6ms 50%
        // now looping with mapers
        let mapper =[indexArray[0],indexArray[1],indexArray[2]]
        for(let map of mapper){
            for(let j of curr){
                for(let k of map){
                    if(!set.has(board[j][k])){
                        set.add(board[j][k])
                    }else{
                        if(board[j][k]!='.'){
                            return false
                        }
                    }
                }
        }
        set.clear()
    }
    // we got 3ms with 88.66%
    }
    return true
}
// console.log(valid_sudoku([["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]))
// console.log(valid_sudoku([["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]))
