function spiralMatrix(matrix){
    let rtn=[]
    while(matrix.length){
        for(let i=0;i<matrix[0].length;i++){
            rtn.push(matrix[0][i])
        }
        matrix.shift()
        if(matrix.length){
            let newMatrix=new Array(matrix[0].length).fill(0).map(()=>[])
            for(let i=matrix[0].length-1;i>=0;i--){
                for(let j=0;j<matrix.length;j++){
                    newMatrix[matrix[0].length-1-i][j]=matrix[j][i]
                }
            }
            matrix=newMatrix
        }
    }
    return rtn
    //cool approach beats 100% with 0ms
    // the 0ms ltcod approach doesnt involve removing so check this below 
    // const m = matrix.length
    // const n = matrix[0].length
    // let top = 0
    // let left = 0
    // let right = n - 1
    // let bottom = m - 1
    // const ans = []
    // while (left <= right && top <= bottom){
    //     for(let i=left; i<=right;i++){
    //         // console.log(matrix[top][i])
    //         ans.push(matrix[top][i])
    //     }
    //     top++
    //     for(let i=top; i<=bottom;i++){
    //         ans.push(matrix[i][right])
    //     }
    //     right--
    //     if (top <= bottom){
    //         for(let i=right; i>=left;i--){
    //             // console.log(matrix[bottom][i])
    //             ans.push(matrix[bottom][i])
    //         }
    //         bottom--
    //     }
    //     if (left <= right){
    //         for(let i=bottom; i>=top;i--){
    //         ans.push(matrix[i][left])
    //     }
    //     left++
    //     }
    // }
    // return ans
}
// console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

function rotate_image(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=i+1;j<matrix[i].length;j++){
            let t=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=t
        }
    }
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
    //0ms tc with 100% beat
}
// console.log(rotate_image([[1,2,3],[4,5,6],[7,8,9]]))

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
    //1ms tc 72% beat
}
// console.log(set_matrix_zeroes([[1,1,1],[1,0,1],[1,1,1]]));
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