/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) return null;
    let first = head;
    let second = head.next;
    let third = head.next;
    while (second) {
        if (!second.next) break;
        first.next = second.next;
        second.next = second.next.next;
        first.next.next = third;
        first = first.next;
        second = second.next;
    }
    return head;
};

