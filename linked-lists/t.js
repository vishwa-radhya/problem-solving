class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}   
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size == 0
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        }else{
            let curr = this.head;
            while(curr.next){
                curr=curr.next
            }
            curr.next=newNode
        }
        this.size++
    }
    insertAtIndex(data,index){
        if(index<0) return false
        if(index==0){
            this.insertAtBegin(data)
            return true
        }
        if(index>this.size){
            this.insertAtEnd(data)
            return true
        }
        const newNode = new Node(data)
        let curr = this.head
        let prev=null
        let i=0
        while(i<index){
            prev=curr
            curr=curr.next
            i++
        }
        newNode.next = curr
        prev.next = newNode
        this.size++
    }
    insertAtBegin(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
    insertAtEnd(data){
        if(this.isEmpty()){
            this.insertAtBegin(data)
            return true
        }
        let curr = this.head
        while(curr.next){
            curr=curr.next
        }
        let newNode = new Node(data)
        curr.next = newNode
        this.size++
    }
    dataAtIndex(index){
        if(this.isEmpty()){
            return
        }
        if(index > this.size){
            console.log('null')
            return
        }
        if(index == this.size){
            console.log("null")
            return
        }
        let curr = this.head
        let i=0
        while(i<index){
            curr=curr.next
            i++
        }
        console.log(curr.data)
    }
    printList(){
        let curr = this.head;
        if(this.isEmpty()) return null
        while(curr){
            process.stdout.write(curr.data+" -> ")
            curr=curr.next
        }
        process.stdout.write("null")
        console.log()
    }
    removeAtIndex(index){
        if(this.isEmpty() ||  index >= this.size) return
        if(index == 0){
            this.removeAtBegining()
            return
        }
        if(index == this.size-1){
            this.removeAtEnd()
            return
        }
        let curr = this.head
        let prev=null
        let i=0
        while(i <index){
            prev = curr
            curr = curr.next
            i++
        }
        prev.next = curr.next
        this.size--
    }
    removeAtBegining(){
        if(this.isEmpty()) return
        this.head = this.head.next
        this.size--
    }
    removeAtEnd(){
        if(this.isEmpty()) return
        if(this.size == 1){
            this.head=null
            this.size--
            return
        }
        let curr = this.head
        let prev = null
        while(curr.next){
            prev = curr
            curr=curr.next
        }
        prev.next=null
        this.size--
    }
    clear(){
        this.head=null
        this.size=0
    }
    toArray() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        return result;
    }
}

//builder
function ListNode(val,next){
    this.val = (val==undefined ? 0 :val)
    this.next = (next==undefined ? null :next)
}

function convertToLeetCodeList(head) {
    if (!head) return null;
    let leetHead = new ListNode(head.data);
    let current = leetHead;
    head = head.next;
    while (head) {
        current.next = new ListNode(head.data);
        current = current.next;
        head = head.next;
    }
    return leetHead;
}


function mergeTwoLists(list1,list2){
    let result = new ListNode();
    let temp = result;
    while(list1!=null && list2!=null){
        if(list1.val<=list2.val){
            temp.next = list1
            list1 = list1.next
            temp=temp.next
            // console.log(result)
            // console.log("temp:",temp)
            // console.log("list1:",list1)
        }else{
            temp.next = list2
            list2 = list2.next
            temp=temp.next
            // console.log(result)
            // console.log("temp:",temp)
            // console.log("list2:",list2)
        }
    }
    temp.next = list1!=null ? list1 : list2
    return result.next
}
// const list1 = new LinkedList();
// list1.append(1)
// list1.append(2)
// list1.append(4)
// const list2 = new LinkedList();
// list2.append(1)
// list2.append(3)
// list2.append(4)
// console.log(list1,list2)
// console.log(mergeTwoLists(convertToLeetCodeList(list1.head),convertToLeetCodeList(list2.head)))

function reverse_linked_list(head){
    // ex-> [1,2,3,4,5] -> [5,4,3,2,1]
    // if(!head) return head
    // let arr =[]
    // let cur = head;
    // while(cur){
    //     arr.push(cur.val)
    //     cur=cur.next
    // }
    // arr=arr.reverse()
    // let res = new ListNode()
    // let c = res
    // for(let i=0;i<arr.length;i++){
    //     c.next=new ListNode(arr[i])
    //     c=c.next
    // }
    // return res.next
    //2ms with 2.50% beat
    //hitting with 3 pointer approach
    let prev =null
    let curr = head
    while(curr){
        let next = curr.next
        // console.log("next:",next)
        curr.next=prev
        // console.log("curr:",curr)
        prev=curr
        // console.log("prev:",prev)
        curr=next
        // console.log("curr:",curr)
        // console.log('-----------------')
    }
    return prev
    //0ms with 100% upbeat
}
// const list1 = new LinkedList();
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// console.log(list1)
// console.log(reverse_linked_list(convertToLeetCodeList(list1.head)))

function linked_list_cycle(head){
    // let set = new Set()
    // let curr = head
    // while(curr){
    //     if(set.has(curr)){
    //         return true
    //     }
    //     set.add(curr)
    //     curr=curr.next
    // }
    // return false
    // 47ms with 82.34% beat 
    // using slow and fast pointer approach
    let slow = head
    let fast = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        // console.log(fast,slow)
        if(slow == fast) return true
    }
    return false
    //48ms with 78.43% beat

}
// let list1 = new LinkedList();
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// console.log(linked_list_cycle(convertToLeetCodeList(list1.head)))

function intersection_of_two_linked_lists(headA,headB){
    // let headACount=0
    // let headBCount=0
    // let c1 = headA
    // let c2 = headB
    // while(c1){headACount++
    //      c1=c1.next}
    // while(c2){headBCount++
    //      c2=c2.next}
    // let biggerCountNode = headACount >= headBCount ? 'A' : 'B'
    // c1 = headA
    // c2 =headB
    // let diff = Math.abs(headACount-headBCount)
    // if(biggerCountNode == 'A'){
    //     let i=0
    //     while(i<diff && c1.next){
    //         c1=c1.next
    //         i++
    //     }
    // }else{
    //     let i=0
    //     while(i<diff && c2.next){
    //         c2=c2.next
    //         i++
    //     }
    // }
    // while(c1 && c2){
    //     // console.log(c1)
    //     // console.log(c2)
    //     if(c1==c2){
    //         return c1
    //     }
    //     c1=c1.next
    //     c2=c2.next
    // }
    // return null
    //52ms tc with 81.96% beat
    //the 35ms one is crazy as hell its the fastest
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        // console.log(pA)
        // console.log(pB)
        pA = (pA === null) ? headB : pA.next;
        pB = (pB === null) ? headA : pB.next;
    }
    return pA;
}
// intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// const list1 = new LinkedList();
// list1.append(4)
// list1.append(1)
// list1.append(8)
// list1.append(4)
// list1.append(5)
// const list2 = new LinkedList();
// list2.append(5)
// list2.append(6)
// list2.append(1)
// list2.append(8)
// list2.append(4)
// list2.append(5)
// console.log(intersection_of_two_linked_lists(convertToLeetCodeList(list1.head),convertToLeetCodeList(list2.head)))

function remove_nth_node_from_end_of_list(head,n){
    let len =0
    let c = head
    while(c){
        len++
        c=c.next
    }
    let removeIndex = len-n
    c=head
    let prev =null
    let i=0
    while(i<removeIndex){
        prev=c
        c=c.next
        i++
    }
    if(prev && c.next){
        prev.next = c.next
    }else if(prev && !c.next){
        prev.next=null
    }else if(!prev && c.next){
        head=c.next
    }else if(!prev && c.next==null){
        return null
    }
    else if(!prev && !c){
        return null
    }
    return head
    //0ms with 100% upbeat
}
// [1,2,3,4,5], n = 2 -> [1,2,3,5]
// [1], n = 1 -> []
// [1,2], n = 1 -> [1]
// [1,2], n = 2 -> [2]
// const list1 = new LinkedList();
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// console.log(remove_nth_node_from_end_of_list(convertToLeetCodeList(list1.head),2))
// console.log(remove_nth_node_from_end_of_list(convertToLeetCodeList(list1.head),1))

function add_two_numbers(l1,l2){
    // let l1Arr=[]
    // let l2Arr=[]
    // let c1 =l1
    // let c2 =l2
    // while(c1){
    //     l1Arr.push(c1.val)
    //     c1=c1.next
    // }
    // while(c2){
    //     l2Arr.push(c2.val)
    //     c2=c2.next
    // }
    // let sum = Number(l1Arr.reverse().join(''))+Number(l2Arr.reverse().join(''))
    // if(sum==0){
    //     let res = new ListNode()
    //     return res
    // }
    // let res = new ListNode()
    // let c= res
    // while(sum>0){
    //     c.next=new ListNode(sum%10)
    //     c=c.next
    //     sum=Math.floor(sum/10)
    // }
    // return res.next
    //wrong answer at 1566/1569 due to large number addition
    //should follow add from reverse then chain the value from front handling nodeval+nodeval >= 10
    let res = new ListNode()
    let resCurr = res
    let remainingVal=0
    while(l1 && l2){
        let sum = l1.val+l2.val
        if(remainingVal>0){
            sum+=remainingVal
            remainingVal=0
        }
        if(sum>=10){
            let t = sum
            sum = sum%10
            remainingVal = Math.floor(t/10)
        }
        resCurr.next= new ListNode(sum)
        resCurr=resCurr.next
        l1=l1.next
        l2=l2.next
    }
    if(remainingVal==0 && (l1 || l2)){
        resCurr.next = l1 || l2
    }
    else if(!l1 && !l2 && remainingVal>0){
        resCurr.next = new ListNode(remainingVal)
        resCurr=resCurr.next
    }
    else if(l1 && remainingVal>0){
        while(l1){
            let sum = l1.val+remainingVal
            remainingVal=0
            if(sum>=10){
                let t=sum
                sum=sum%10
                remainingVal=Math.floor(t/10)
            }
            resCurr.next = new ListNode(sum)
            resCurr=resCurr.next
            l1=l1.next
        }
        if(remainingVal){
            resCurr.next = new ListNode(remainingVal)
        }
    }else if(l2 && remainingVal>0){
        while(l2){
            let sum = l2.val+remainingVal
            remainingVal=0
            if(sum>=10){
                let t=sum
                sum=sum%10
                remainingVal=Math.floor(t/10)
            }
            resCurr.next = new ListNode(sum)
            resCurr=resCurr.next
            l2=l2.next
        }
        if(remainingVal){
            resCurr.next = new ListNode(remainingVal)
        }
    }
    return res.next
    //3ms with 57.57% beat
    //the 0ms sol with precomputed edge cases
    // let q = 0;
    // let sentinel = new ListNode();
    // let temp = sentinel;
    // while (l1 || l2) {
    //     let v1 = l1 ? l1.val : 0;
    //     let v2 = l2 ? l2.val : 0;
    //     let sum = v1 + v2 + q;
    //     temp.next = new ListNode(sum % 10);
    //     temp = temp.next;
    //     q = Math.floor(sum / 10);
    //     l1 = l1 ? l1.next : null;
    //     l2 = l2 ? l2.next : null;
    // }
    // if (q > 0) temp.next = new ListNode(q);
    // return sentinel.next;
}
// l1 = [2,4,3], l2 = [5,6,4] [7,0,8] 342 + 465 = 807
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] [8,9,9,9,0,0,0,1]
// const list1 = new LinkedList();
// list1.append(9)
// list1.append(9)
// list1.append(9)
// list1.append(9)
// list1.append(9)
// list1.append(9)
// list1.append(9)
// list1.append(1)
// const list2 = new LinkedList();
// list2.append(9)
// list2.append(9)
// list2.append(9)
// list2.append(9)
// console.log(add_two_numbers(convertToLeetCodeList(list1.head),convertToLeetCodeList(list2.head)))

//design linked list

function rotate_list(head,k){
    // let c = head
    // let arr=[]
    // while(c){
    //     arr.push(c.val)
    //     c=c.next
    // }
    // let arrLen = arr.length
    // k = k%arrLen
    // let l=0
    // let r=arrLen-1
    // while(l<r){
    //     let t = arr[l]
    //     arr[l]=arr[r]
    //     arr[r]=t
    //     l++
    //     r--
    // }
    // l=0
    // r=k-1
    // while(l<r){
    //     let t = arr[l]
    //     arr[l]=arr[r]
    //     arr[r]=t
    //     l++
    //     r--
    // }
    // l=k
    // r=arrLen-1
    // while(l<r){
    //     let t = arr[l]
    //     arr[l]=arr[r]
    //     arr[r]=t
    //     l++
    //     r--
    // }
    // let res = new ListNode()
    // c=res
    // for(let i=0;i<arrLen;i++){
    //     c.next = new ListNode(arr[i])
    //     c=c.next
    // }
    // return res.next
    //1ms with 24.20% beat (used array)
    /***************** */
    // if(!head || !head.next) return head
    // let listLen =0
    // let c = head
    // while(c){
    //     listLen++
    //     c=c.next
    // }
    // k=k%listLen
    // let s = head;
    // let f = head;
    // for(let i=0;i<k;i++){ 
    //     f=f.next;
    // }
    // while(f.next){
    //     s = s.next;
    //     f=f.next;
    // }
    // f.next = head;
    // let newNode = s.next;
    // s.next = null;
    // return newNode;
    /**************************** */
    if(!head || !head.next) return head
    let len=0,c=head
    while(c){
        len++
        c=c.next
    }
    k=k%len
    if(k==0) return head
    function reverseList(head){
        let prev=null
        while(head){
            let next = head.next
            head.next=prev
            prev=head
            head=next
        }
        return prev
    }
    head = reverseList(head)
    let first=head,prev=null
    let i=0
    while(i<k && first){
        prev=first
        first=first.next
        i++
    }
    prev.next=null
    let firstPart = reverseList(head)
    let secondPart = reverseList(first)
    let tail = firstPart
    while(tail.next) tail=tail.next
    tail.next=secondPart
    return firstPart
    //0ms tc with 100% upbeat
}
// let list1 = new LinkedList()
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// console.log(rotate_list(convertToLeetCodeList(list1.head),2))

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var MyLinkedList = function() {
    this.head = null
    this.length=0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.length==0 || index<0 || index>=this.length) return -1
    let i=0;
    let curr = this.head
    while(i<index){
        curr=curr.next
        i++
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.length==0){
        this.head=new ListNode(val)
        this.length++
        return
    }
    let newNode = new ListNode(val)
    newNode.next=this.head
    this.head=newNode
    this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.length==0){
        this.addAtHead(val)
        return
    }
    let curr = this.head
    let newNode = new ListNode(val)
    while(curr.next){
        curr=curr.next
    }
    curr.next=newNode
    this.length++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.length || index<0) return
    if(index == this.length){
        this.addAtTail(val)
        return
    }   
    if(index==0){
        this.addAtHead(val)
        return
    }
    let i=0
    let prev=null
    let curr = this.head
    let newNode = new ListNode(val)
    while(i<index && curr){
        prev = curr
        curr=curr.next
        i++
    }
    prev.next = newNode
    newNode.next = curr
    this.length++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0 || index>=this.length ) return
    if(index==0 && this.length){
        this.head = this.head.next
        this.length--
        return
    }
    let i=0
    let prev=null
    let curr =this.head
    while(i<index && curr){
        prev=curr
        curr=curr.next
        i++
    }
    prev.next=curr?.next
    this.length--
};
// 31ms with 18.15% beat
 
//   Your MyLinkedList object will be instantiated and called as such:
//   var obj = new MyLinkedList()
  //   var param_1 = obj.get(index)
    // obj.addAtHead(1)
    // obj.addAtHead(2)
    // obj.addAtTail(3)
    // obj.addAtIndex(0,1)
    // obj.addAtIndex(1,2)
    // obj.addAtIndex(2,3)
    // obj.deleteAtIndex(0)
//   console.log(obj.get(2))
//   obj.addAtTail(val)
//   obj.addAtIndex(index,val)
//   obj.deleteAtIndex(index)
 
function remove_duplicates_from_sorted_list_II(head){
    // if(!head || !head.next) return head
    // let set=new Set()
    // let removeNums=[]
    // let curr = head
    // while(curr){
    //     if(set.has(curr.val)){
    //         removeNums.push(curr.val)
    //     }else{
    //         set.add(curr.val)
    //     }
    //     curr=curr.next
    // }
    // set = new Set(removeNums)
    // //dummy head to handle edge cases like head itself to be removed
    // let dummy = {next:head}
    // let prev = dummy
    // curr=head
    // while(curr){
    //     if(set.has(curr.val)){
    //         prev.next=curr.next
    //     }else{
    //         prev=curr
    //     }
    //     curr=curr.next
    // }
    // return dummy.next
    //4ms with 7.74% beat
    // taking the above approach with more native usage
    if (!head || !head.next) return head;
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;
    while (current) {
        let isDuplicate = false;
        //skip to last if 2->2->2 then current goes to last 2 then we use prev.next to c.next
        while (current.next && current.val === current.next.val) {
            isDuplicate = true;
            current = current.next;
        }
        if (isDuplicate) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }
    return dummy.next;
    //0ms tc with 100% upbeat
}
// let list1 = new LinkedList()
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(3)
// list1.append(4)
// list1.append(4)
// list1.append(5)
// console.log(remove_duplicates_from_sorted_list_II(convertToLeetCodeList(list1.head)))
// head = [1,2,3,3,4,4,5]-> [1,2,5]

function swap_nodes_in_pairs(head){
    if(!head || !head.next) return head
    let arr=[]
    let c = head
    while(c){
        arr.push(c.val)
        c=c.next
    }
    let last = arr.length%2==0 ? arr.length-1 : arr.length-2
    let i=0,j=1
    while(i<arr.length && j<arr.length){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i+=2
        j+=2
    }
    c=head
    i=0
    while(c && i<arr.length){
        c.val=arr[i]
        i++
        c=c.next
    }
    return head
    // 0ms tc with 100% upbeat
    // another 0ms with in place list modification
    // let pre=head;
    // let cur=head;
    // if(cur && cur.next){
    //     pre.next=cur.next;
    //     let n1=cur;
    //     let n2=cur.next;
    //     n1.next=n2.next
    //     n2.next=cur;        
    //     cur=n1.next;        
    //     head=n2;
    // }
    // while(cur && cur.next){
    //     pre.next=cur.next;
    //     let n1=cur;
    //     let n2=cur.next;
    //     n1.next=n2.next;
    //     n2.next=cur;
    //     pre=cur;
    //     cur=n1.next;
    // }
    // return head
}
// const list1 = new LinkedList()
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// list1.append(5)
// console.log(swap_nodes_in_pairs(convertToLeetCodeList(list1.head)))
// [1,2,3,4] [2,1,4,3]
//[] [] // [1] [1] // [1,2,3] [2,1,3]

function middle_of_linked_list(head){
    if(!head || !head.next || !head.next.next) return head
    let slow = head
    let fast = head
    while(fast?.next){
        fast = fast && fast.next ? fast.next : null
        fast = fast && fast.next ? fast.next : null
        slow=slow.next
    }
    return slow
}
// 0ms with 100% upbeat
// [1,2,3,4,5] => [3,4,5]
// [1,2,3,4,5,6] => [4,5,6]
// constraints nodes -> [1,100] 
// console.log(middle_of_linked_list(convertToLeetCodeList(list1.head)))

function palindrome_linked_list(head){
    // let arr=[]
    // let c = head
    // while(c){
    //     arr.push(c.val)
    //     c=c.next
    // }
    // let i=0,j = arr.length-1
    // while(i<j){
    //     if(arr[i]!=arr[j]) return false
    //     i++
    //     j--
    // }
    // return true
    // 6ms with 54.40% beat
    // alternate feasible appraoch find middle reverse the middle and check first half and middle
    if(!head || !head.next) return true
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow=slow.next
        fast = fast.next.next
    }
    let prev = null
    while(slow){
        let next = slow.next
        slow.next=prev
        prev=slow
        slow=next
    }
    fast = head
    while(prev && fast){
        if(prev.val !== fast.val) return false
        prev=prev.next
        fast=fast.next
    }
    return true
    //3ms with 93.35% beat
}
// [1,2,2,1] => true
// [1,2] => false

function delete_the_middle_node_of_linked_list(head){
    if(!head) return head
    if(!head.next) return head=head.next
    let prev=null
    let slow=head
    let fast = head
    while(fast && fast.next){
        prev=slow
        slow=slow.next
        fast=fast.next.next
    }
    prev.next=slow.next
    return head
    // 2ms with 99.73% beat
}

function odd_even_linked_list(head){
    if(!head || !head.next) return head
    let odd = head
    let even = head.next
    let evenHead = even
    while(even && even.next){
        odd.next=even.next
        odd=odd.next
        even.next=odd.next
        even=even.next
    }
    odd.next=evenHead
    return head
    //0ms with 100% upbeat
}

function reorder_list(head){
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    let prev=null,curr = slow.next
    slow.next=null
    while(curr){
        let next = curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    let secondPart=prev
    let first=head,second = secondPart
    while(second){
        let t1 = first.next
        let t2 = second.next
        // console.log("t1:",t1,"t2:",t2)
        first.next=second
        second.next=t1
        // console.log("first:",first,"second:",second)
        first=t1
        second=t2
        // console.log("first:",first,"second:",second)
    }
    //3ms with 41.89% beat (max similar approaches)
}
//[1,2,3,4,5] -> [1,5,2,4,3]
function find_the_duplicate_number(nums){
    // nums=nums.sort((a,b)=>a-b)
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]==nums[i+1]) return nums[i]
    // }
    //127ms with 5.82% beat
    // for(let i=0;i<nums.length;i++){
    //     let e = Math.abs(nums[i])
    //     if(nums[e]<0) return e
    //     nums[e]=-nums[e]
    // }
    //2ms with 98.52% beat
    //using linked list approach
    let slow = nums[0];
    let fast = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]]
    }while(slow !== fast)
    slow = nums[0]
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]   
    }
    return slow 
}
//[1,3,4,2,2]

function partition_list(head,x){
    if(!head || !head.next) return head
    let arr=[]
    let c=head
    while(c && c.val!=x) c=c.next
    c= c ? c.next : null
    while(c){
        if(c.val<x) arr.push(c.val)
        c=c.next
    }
    let list = new ListNode()
    c=list
    while(arr.length){
        c.next = new ListNode(arr.shift())
        c=c.next
    }
    list=list.next
    let prev=null
    c=head
    while(c){
        prev = c
        c=c.next
        if(c.val>=x){
            prev.next=list
            list.next=c
            return head
        }
    }
}
// [1,4,3,2,5,2] , 3 -> [1,2,2,4,3,5]
// [2,1] , 2 -> [1,2]

// let list1 = new LinkedList();
// list1.append(1)
// list1.append(4)
// list1.append(3)
// list1.append(2)
// list1.append(5)
// list1.append(2)
// console.log(partition_list(convertToLeetCodeList(list1.head),3))

function reverse_linked_list_II(head,left,right){
    let count=1
    let leftPart=null
    let rightPart=null
    let curr = head
    while(count<=left && curr){
        leftPart=curr
        leftPart.next=null
        curr=curr.next
        count++
    }
    count=1
    curr=head
    while(curr && count<=right){
        rightPart=curr
        curr=curr.next
        count++
    }
    return {leftPart,rightPart}
}
let list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.append(5)
console.log(reverse_linked_list_II(convertToLeetCodeList(list1.head),2,4))
