function valid_parenthesis(s){
    // let stack=[]
    // let chk={
    //     '(':')',
    //     '{':'}',
    //     '[':']'
    // }
    // let top=-1
    // for(let i=0;i<s.length;i++){
    //     if(s[i]==='(' || s[i]==='{' || s[i]==='['){
    //         stack.push(s[i])
    //         top++            
    //     }else{
    //         if(top<0){
    //             return false
    //         }else{
    //             let topEle = stack[top]
    //             if(chk[topEle]===s[i]){
    //                 stack.pop()
    //                 top--
    //             }else{
    //                 return false
    //             }
    //         }
    //     }        
    // }
    // return top<0 ? true : false;
    //2ms tc 75% beat
    // same ms one with good implementation
    brackets = { '(': ')', '[': ']', '{': '}' };
    stack = [];
    for (const char of s) {
        if (brackets[char]) {
            stack.push(char);
        } else if (brackets[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length === 0;
}
// console.log(valid_parenthesis("()"))
// console.log(valid_parenthesis("()[]{}"))
// console.log(valid_parenthesis("(]"))
// console.log(valid_parenthesis("([])"))

function remove_all_adjacent_duplicates_in_string(s){
    let stack =[]
    let top=-1
    for(const char of s){
        if(top==-1){
            stack.push(char)
            top++
            // console.log(stack)
        }
        else if(stack[top]==char){
            stack.pop()
            top--
            // console.log(stack)
        }else{
            stack.push(char)
            top++
            // console.log(stack)
        }
    }
    return stack.join('')
    // 7ms tc with 94.87% beat
    //the 3ms sol (highest) without top or any is
    // const stack=[]
    // for(let char of s){
    //     if(stack.length && stack[stack.length-1]==char){
    //         stack.pop()
    //     }else{
    //         stack.push(char)
    //     }
    // }
    // return stack.join('')
}
// console.log(remove_all_adjacent_duplicates_in_string('abbaca'))
// console.log(remove_all_adjacent_duplicates_in_string('azxxzy'))

function removing_stars_from_a_string(s){
    // let stack=[]
    // let top=-1
    // for(const char of s){
    //     stack.push(char)
    //     top++
    //     if(stack[top]=='*'){
    //         if(stack.length) {
    //             stack.pop()
    //             top--
    //         }
    //         if(stack.length) {
    //             stack.pop()
    //             top--
    //         }
    //     }
    // }
    // return stack.join('')
    //33ms with 21.88% beat
    // instead of double popping we can just just add ele with no stars and on encountering star pop stack
    let stack=[]
    for(const char of s){
        if(char=='*') stack.pop()
        else stack.push(char)
    }
    return stack.join('')
    // just given  tc 31 ms but on using string[i] it reduced the tc to 17ms
}
// console.log(removing_stars_from_a_string('leet**cod*e')) //lecoe
// console.log(removing_stars_from_a_string('erase*****'))

function daily_temperatures(temperatures){
    // let res=[]
    // for(let i=0;i<temperatures.length;i++){
    //     let stack=[]
    //     stack.push(i)
    //     for(let j=i+1;j<temperatures.length;j++){
    //         if(temperatures[j]>temperatures[i]){
    //             stack.push(j)
    //             break
    //         }
    //     }
    //     if(stack.length==2){
    //         res.push(stack[1]-stack[0])
    //     }else{
    //         res.push(0)
    //     }
    // }
    // return res
    // worked so good up to 47/48 test cases tle at 47 (tc O(n^2))
    // the efficient O(n) somewhat approach works where we use stack to check the current ele to stack top to eval its pos until then we keep on adding indices
    // its called decreasing monotonic stack ?????? - for now
    let res = new Array(temperatures.length).fill(0)
    let stack=[]
    for(let i=0;i<temperatures.length;i++){
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
            let index = stack.pop()
            res[index]=i-index
        }
        stack.push(i)
    }
    return res
    // 14ms with 91.22% beat
    // using new Int32Array() instead of new Array() reduced tc to 10ms with 99.28% beat coz the BYTES_PER_ELEMENT prop of Int32Array is 4 i think it reduces the space complexity thus increasing rank __ shouldnt go to Int16Array which has BYTES_PER_ELEMENT as 2 doesnt support for larger input individual sizes
}
// console.log(daily_temperatures([73,74,75,71,69,72,76,73]))
// console.log(daily_temperatures([30,40,50,60]))
// console.log(daily_temperatures([30,60,90]))

function evaluate_reverse_polish_notation(tokens){
    // let stack=[]
    // let ops=new Set(['+','-','*','/'])
    // for(let i=0;i<tokens.length;i++){
    //     if(ops.has(tokens[i])){
    //         let s = stack.pop()
    //         let f = stack.pop()
    //         stack.push(String(Math.trunc(eval(f+tokens[i]+s))))
    //     }else{
    //         stack.push(tokens[i])
    //     }
    // }
    // return (Number(stack))
    // eval fails at major like 2--3 the string concat is hindering this issue so switching to manual calc
    let stack=[]
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]=='+' || tokens[i]=='-' || tokens[i]=='*' || tokens[i]=='/' ){
            let s = Number(stack.pop())
            let f = Number(stack.pop())
            let res;
            if(tokens[i]=='+') res=f+s
            else if(tokens[i]=='-') res=f-s
            else if(tokens[i]=='*') res=f*s
            else if(tokens[i]=='/') res=Math.trunc(f/s)
            stack.push(res)
        }else{
            stack.push(tokens[i])
        }
    }
    return (Number(stack.pop()))
    /**************************************se down */
    //7ms (the top)  with 7ms tc 54% upbeat
    // the similar approach where there are some things which eliminated the recurring operations
    // const stack = [];
    // const ops = {
    //     "+": (a, b) => a + b,
    //     "-": (a, b) => a - b,
    //     "*": (a, b) => a * b,
    //     "/": (a, b) => Math.trunc(a / b)
    // };
    // for (let token of tokens) {
    //     if (token in ops) {
    //         const b = stack.pop();
    //         const a = stack.pop();
    //         stack.push( ops[token](a, b) );
    //     } else {
    //         stack.push( +token );
    //     }
    // }
    // return stack.pop();
}
// console.log(evaluate_reverse_polish_notation(["2","1","+","3","*"]))
// console.log(evaluate_reverse_polish_notation(["4","13","5","/","+"]))
// console.log(evaluate_reverse_polish_notation(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))

const MinStack=function(){
     this.stack=[]
     this.minStack=[]
}
//{number} val, return {void}
MinStack.prototype.push=function(val){
    if(!this.minStack.length || val <= this.minStack[this.minStack.length-1]){
        this.minStack.push(val)
    }
    this.stack.push(val)
}
//return {void}
MinStack.prototype.pop=function(){
    const val = this.stack.pop()
    if(val == this.minStack[this.minStack.length-1]){
        this.minStack.pop()
    }
}
//return {number}
MinStack.prototype.top=function(){
    return this.stack[this.stack.length-1]
}
//return {number}
MinStack.prototype.getMin=function(){
    return this.minStack[this.minStack.length-1]
}
/**
 * Minstack obj will be instantiated and called as
 * let obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * let p_3 = obj.top()
 * let p_4 = obj.getMin()
 */
// let obj = new MinStack()
// obj.push(0)
// obj.push(1)
// obj.push(0)
// console.log(obj.getMin())
// obj.pop()
// console.log(obj.getMin())
// console.log(obj.stack);
/*************************************************************
 * 8ms tc with 74.81% beat, 3ms is the highest
 * changing the condition at push to this.minStack.length==0 from !this.minStack.length changed the tc to 7ms with  87.04% upbeat
 */

function basic_calculator_II(s){
//     let stack1=[]
//     let stack2=[]
//     // initial stack push
//     let t=''
//     for(let i=0;i<s.length;i++){
//         if(char != " ") {
//             if(char == '/' || char == '*' || char == '-' || char=='+'){
//                 stack1.push(char)
//             }else{
//                 if()
//                 stack1.push(Number(char))
//             }
//         }
//     }
//     if(!stack1.includes('+') && !stack1.includes('-') && !stack1.includes('*') && !stack1.includes('/')){
//         return s
//     }
// // console.log("stk1:",stack1,"stk2:",stack2)
//     // div op
//     while(stack1.length){
//         let current = stack1.pop()
//         if(current == '/'){
//             let init = stack2.pop()
//             let fin = stack1.pop()
//             let res = Math.trunc(fin/init)
//             stack2.push(res)
//         }else{
//             stack2.push(current)
//         }
//     }
//     if(stack2.length==1){
//         return stack2[0]
//     }
//     // console.log("stk1:",stack1,"stk2:",stack2)
//     // multilply op
//     while(stack2.length){
//         let current = stack2.pop()
//         if(current == '*'){
//             let init = stack1.pop()
//             let fin = stack2.pop()
//             let res = fin*init
//             stack1.push(res)
//         }else{
//             stack1.push(current)
//         }
//     }
//     if(stack1.length==1){
//         return stack1[0]
//     }
//     // console.log("stk1:",stack1,"stk2:",stack2)
//     // add op
//     while(stack1.length){
//         let current = stack1.pop()
//         if(current == '+'){
//             let init = stack2.pop()
//             let fin = stack1.pop()
//             let res = fin+init
//             stack2.push(res)
//         }else{
//             stack2.push(current)
//         }
//     }
//     if(stack2.length==1){
//         return stack2[0]
//     }
//     // console.log("stk1:",stack1,"stk2:",stack2)
//     // sub op
//     while(stack2.length){
//         let current = stack2.pop()
//         if(current == '-'){
//             let init = stack1.pop()
//             let fin = stack2.pop()
//             let res = init-fin
//             stack1.push(res)
//         }else{
//             stack1.push(current)
//         }
//     }
//     if(stack1.length==1){
//         return stack1[0]
//     }
//     // console.log("stk1:",stack1,"stk2:",stack2)
//     return stack1[0]
    /**
     * an workable one above "if" with clear input number building before and after operator
     */
    if(s.length == 0) return 0
    let opsSet=new Set(['+','-','*','/'])
    let operands=[]
    let num = 0
    let lastSign ='+'
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(!opsSet.has(c) && c!=" "){
            num = num *10+(c-'0')
        }
        if(opsSet.has(c) && c!=" " || i==s.length-1){
            if(lastSign=='+'){
                operands.push(num)
            }else if(lastSign == '-'){
                operands.push(-num)
            }else{
                let top = operands.pop()
                if(lastSign == '*'){
                    operands.push(top*num)
                }else if(lastSign == '/'){
                    operands.push(Math.trunc(top/num))
                }
            }
            lastSign = c
            num=0
        }
    }
    let res=0
    for(let num of operands){
        res+=num
    }
    return res
    //given 27ms tc with 57.67% beat
    // const stack = [];
    // let currentNumber = 0;
    // let operator = '+'; // Start with '+' to handle the first number

    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];

    //     // Build the current number (handle multi-digit numbers)
    //     if (char >= '0' && char <= '9') {
    //         currentNumber = currentNumber * 10 + parseInt(char);
    //     }

    //     // If we hit an operator or reach the end, process the previous operator
    //     if (char === '+' || char === '-' || char === '*' || char === '/' || i === s.length - 1) {
    //         if (operator === '+') {
    //             stack.push(currentNumber);
    //         } else if (operator === '-') {
    //             stack.push(-currentNumber);
    //         } else if (operator === '*') {
    //             stack.push(stack.pop() * currentNumber);
    //         } else if (operator === '/') {
    //             // Handle division with truncation toward zero
    //             const prev = stack.pop();
    //             stack.push(prev >= 0 ? Math.floor(prev / currentNumber) : Math.ceil(prev / currentNumber));
    //         }

    //         operator = char; // Update operator for next iteration
    //         currentNumber = 0; // Reset current number
    //     }
    //     // Skip spaces - we don't need to do anything for them
    // }

    // // Sum all values in the stack
    // return stack.reduce((sum, num) => sum + num, 0);
    //the 3ms solution same as above the top one 
}
// console.log(basic_calculator_II("3+2*2"))
// console.log(basic_calculator_II(" 3/2 "))
// console.log(basic_calculator_II(" 3+5 / 2 "))
// console.log(basic_calculator_II("0-214"))

function generate_parentheses(n){
    // let stack=[]
    // let res=[]
    // function backtrack(open,close){
    //     // console.log("open:",open,"close:",close)
    //     // console.log("stack: ",stack)
    //     if(open==n && close==n){
    //         res.push(stack.join(''))
    //         return
    //     }
    //     if(open<n){
    //         stack.push('(')
    //         backtrack(open+1,close)
    //         stack.pop()
    //     }
    //     if(close<open){
    //         stack.push(')')
    //         backtrack(open,close+1)
    //         stack.pop()
    //     }
    // }
    // backtrack(0,0)
    // return res
    // 2ms tc with 41.08% beat
    // the 1ms sol the upbeat one
    let ans=[];
    function dp(openP,closeP,s){
        console.log(s)
        if(openP===closeP && openP===n && closeP===n){
            ans.push(s);
            return;
        }
        if(openP<n){
            dp(openP+1,closeP,s+"(");
        }
        if(closeP<openP){
            dp(openP,closeP+1,s+")");
        }
    }
    dp(0,0,"");
    return ans;
}
// console.log(generate_parentheses(3))
// console.log(generate_parentheses(2))
// console.log(generate_parentheses(1))

function minimum_remove_to_make_valid_parentheses(s){
    let o={'(':')'}
    let skipIndices=[]
    let skipIndicesLen=0
    for(let i=0;i<s.length;i++){
        if(s[i]==')' || s[i]=='('){
            if(skipIndicesLen == 0){
                skipIndices.push(i)
                skipIndicesLen++
            }else{
                if(s[i]==')' && o[s[skipIndices[skipIndicesLen-1]]]==')'){
                    skipIndices.pop()
                    skipIndicesLen--
                }else{
                    skipIndices.push(i)
                    skipIndicesLen++
                }
            }
        }
    }
    let r=''
    let set = new Set(skipIndices)
    for(let i=0;i<s.length;i++){
        if(!set.has(i)){
            r+=s[i]
        }
    }
    return r
    // worked with 21ms and 53.11% beat
    // the 8ms sol looks *****************cool***************
    // const chars = s.split('');
    // const stack = [];

    // for (let i = 0; i < chars.length; i++) {
    //     if (chars[i] == '(') {
    //         stack.push(i);
    //     } else if (chars[i] == ')' && stack.length) {
    //         stack.pop();
    //     } else if (chars[i] == ')' && !stack.length){
    //         chars[i] = '';
    //     }
    // }

    // for (let i = 0; i < stack.length; i++) {
    //     chars[stack[i]] = '';
    // }

    // return chars.join('');
}
// console.log(minimum_remove_to_make_valid_parentheses('lee(t(c)o)de)'))
// console.log(minimum_remove_to_make_valid_parentheses('a)b(c)d'))
// console.log(minimum_remove_to_make_valid_parentheses('))(('))