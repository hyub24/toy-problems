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
var deleteDuplicates = function(head) {
    if (!head) return null;
    let headPointer = head;
    let first = head;
    let second = head.next;
    while (second) {
        if (first.val === second.val) {
            first.next = second.next;
            second = second.next;
        } else {
            first = first.next;
            second = second.next;
        }
    }
    return headPointer;
};

// easy linked list problem