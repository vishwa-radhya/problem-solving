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
const list1 = new LinkedList();
list1.append(1)
list1.append(2)
list1.append(4)
const list2 = new LinkedList();
list2.append(1)
list2.append(3)
list2.append(4)
// console.log(list1,list2)
// console.log(mergeTwoLists(convertToLeetCodeList(list1.head),convertToLeetCodeList(list2.head)))