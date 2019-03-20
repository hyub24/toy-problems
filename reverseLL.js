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
var reverseList = function(head) {
    //declare pointer with next value of head
    //declare current as head
    //while loop through list
    //head = curr.next
    //pointer.next = head
    //curr.next = head.next
    //head.next = curr
    // //return head
    // if (!head) return null;
    // let prev = new ListNode();
    // prev.next = head;
    // let curr = head;
    // while (curr.next) {
    //     let prevHead = head;
    //     head = curr.next;
    //     prev.next = head;
    //     curr.next = head.next;
    //     head.next = prevHead;
    // }
    // return head;
    let prev = null
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// good way to reverse LL