/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head) {
        if (head.val === val) head = head.next;
        else break;
    }
    if (!head) return null;
    let link = head.next;
    let behind = head;
    while(link) {
        if (link.val === val) {
            behind.next = link.next;
            link = link.next;
        } else {
            behind = behind.next;
            link = link.next;
        }
    }
    return head;
};