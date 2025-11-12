import math,functools

def convert_octal(n,type):
    mapper={'oct_dec':8,'bin_dec':2}
    val=0
    index = 0
    while n>0:
        val+=(n%10)*math.pow(mapper[type],index)
        index+=1
        n=n//10
    return val

# print(convert_octal(175,'oct_dec'))
# print(convert_octal(1011,'bin_dec'))

def decimal_convertor(n,type):
    mapper={'dec_bin':2,'dec_oct':8}
    res=''
    while n>0:
        res=str(n%mapper[type])+res
        n=n//mapper[type]
    return res
# print(decimal_convertor(25,'dec_bin'))
# print(decimal_convertor(125,'dec_oct'))

class ListNode:
    def __init__(self,val=0,next=None):
        self.val=val
        self.next=next
def create_ll(data):
    if not data: return None
    head = ListNode(data[0])
    current=head
    for i in range(1,len(data)):
        current.next = ListNode(data[i])
        current=current.next
    return head
l1 = create_ll([0,1,2,3,4,5])

def middleNode(head: ListNode)->ListNode:
    slow=head
    fast=head
    while fast is not None and fast.next is not None:
        slow=slow.next
        fast=fast.next.next
    return slow
n1 = middleNode(l1)
print(n1.val)