//  Intersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
// If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let result = new Set();

    while (headB) {
        result.add(headB);
        headB = headB.next;
    }

    while (headA) {
        if (result.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
}