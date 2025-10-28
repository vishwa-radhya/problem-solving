import java.util.*;
public class T {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while(curr!=null){
            ListNode next = curr.next;
            curr.next=prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode result = new ListNode();
       ListNode temp = result;
       while(list1 != null & list2 != null){
        if(list1.val > list2.val){
            temp.next = list2;
            list2 = list2.next;
            temp = temp.next;
        }else{
             temp.next = list1;
            list1 = list1.next;
            temp = temp.next;
        }
       }
       temp.next = (list1 != null)?list1:list2;
       return result.next;
    }
    public boolean hasCycle(ListNode head) {
        if(head==null || head.next==null) return false;
        ListNode slow = head,fast = head;
        while(fast != null && fast.next !=null){
            slow = slow.next;
            fast = fast.next.next != null ? fast.next.next : null;
            if(slow == fast) return true;
        }
        return false;
    }
}
class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }