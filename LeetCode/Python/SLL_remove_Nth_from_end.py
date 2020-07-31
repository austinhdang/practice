"""
Problem:
Given a singly linked list, remove the n-th node from the end of the list and
return its head.

Note:
- Given n will always be valid.
"""


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    p1 = p2 = head
    count = 1
    while p1.next:
        count += 1
        p1 = p1.next
        if count > n + 1:
            p2 = p2.next
    if count == n:
        return head.next
    else:
        p2.next = p2.next.next
        return head
