var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.next);
