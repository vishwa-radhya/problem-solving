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
// const list = new LinkedList();
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(2)
// list.append(3)
// list.insertAtEnd(12)
// list.insertAtBegin(0)
// list.insertAtBegin(1)
// list.insertAtIndex(13,100)
// list.dataAtIndex(4)
// list.removeAtBegining()
// list.removeAtBegining()
// list.removeAtEnd()
// list.removeAtEnd()
// list.removeAtIndex(3)
// list.printList()
// console.log(list.size)