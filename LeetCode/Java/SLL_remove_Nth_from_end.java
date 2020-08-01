/**
 * Problem: Given a singly linked list, remove the n-th node from the end of the
 * list and return its head.
 * 
 * Note: - Given n will always be valid.
 * 
 * @param head The head of the singly linked list to remove from
 * @param n    The n-th number from the length of the list
 * @return The head of the singly linked list with the removed node
 */

class SLL_Remove_Nth_From_End {
  public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
      this.val = val;
    }

    ListNode(int val, ListNode next) {
      this.val = val;
      this.next = next;
    }
  }

  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode p1 = head;
    ListNode p2 = head;
    int count = 1;
    while (p1.next != null) {
      count++;
      p1 = p1.next;
      if (count > n + 1)
        p2 = p2.next;
    }
    if (count == n)
      return head.next;
    else {
      p2.next = p2.next.next;
      return head;
    }
  }
}