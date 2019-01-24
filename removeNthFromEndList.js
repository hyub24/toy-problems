/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next) return null;
    let result = head;
    let link = head;
    let length = 0;
    while(link) {
        length++;
        link = link.next;
    }
    link = head;
    let remove = length - n;
    if (!remove) return head.next;
    for(let i = 1; i<remove; i++) {
        link = link.next;
    }
    link.next = link.next.next;
    return result;
};

// naive solution, should be able to do in one pass