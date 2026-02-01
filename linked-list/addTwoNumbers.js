// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let firstNode = l1;
    let secondNode = l2;
    let newNode = new ListNode();
    let cur = newNode;

    let carry = 0;
    while (carry || firstNode || secondNode) {
        let firstpointer = secondPointer = 0;
        if (firstNode) firstpointer = firstNode.val;
        if (secondNode) secondPointer = secondNode.val;

        let sum = firstpointer + secondPointer + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        cur.next = addNode(digit);   
        cur = cur.next;
        
        firstNode = firstNode && firstNode.next;
        secondNode = secondNode && secondNode.next;
    }
}

var addNode = function(val) {
    let newNode = new ListNode(val);

    return newNode;
}