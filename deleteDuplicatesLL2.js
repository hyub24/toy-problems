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
    //loop through list
    //compare val of next node and next.next node
    //if they are the same then delete the next.next node
    //by changing next.next pointer to next.next.next
    if (!head) return null;
    let prev = new ListNode();
    prev.next = head;
    let curr = head;
    let duplicate = false;
    while (curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
            duplicate = true;
        } else if (duplicate) {
            if (prev.next === head) head = curr.next;
            prev.next = curr.next;
            curr = curr.next;
            duplicate = false;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    if (duplicate) {
        if (prev.next === head) head = curr.next;
        prev.next = curr.next;
        curr = curr.next;
    }
    return head;
};