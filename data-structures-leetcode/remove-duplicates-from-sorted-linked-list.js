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
var deleteDuplicates = function (head) {
  let node = head;
  let next = head.next;
  while (node.next != null) {
    if (next.val === null) return node;
    if (node.val === next.val) node.next = next.next;
    node = node.next;
  }

  return head;
};
