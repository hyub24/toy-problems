/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    // iterate to one before m
    // switch m with next
    // keep taking next node and put it where m was
    // stop once n has been moved
    if (n === m) return head;
    let before = new ListNode();
    before.next = head;
    let switches = n - m;
    let num = m;
    while (num > 1) {
        before = before.next;
        num--;
    }
    let after = before.next;
    let hold;
    while (switches) {
        hold = before.next;
        before.next = after.next;
        after.next = after.next.next;
        before.next.next = hold;
        switches--;
    }
    if (m === 1) return before.next;
    return head;
};