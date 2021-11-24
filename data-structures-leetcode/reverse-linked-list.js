/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // if (head == null || head.next == null) return head
  // let node = head
  // let next = node.next
  // let revList = reverseList(head.next)
  // node.next = null
  // next.next = node
  // return revList

  if (head == null || head.next == null) return head; // no reverse needed here
  let node = head;
  let next = node.next;
  next.next = node;
  node = next;
};
