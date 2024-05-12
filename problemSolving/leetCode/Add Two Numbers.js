// Add Two Numbers //
/*
  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
  and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
var addTwoNumbers = function(l1, l2) {
  const dum = new ListNode();
  let carry = 0;
  let cur = dum;
  while (l1 || l2 || carry) {
      const s = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = Math.floor(s / 10);
      cur.next = new ListNode(s % 10);
      cur = cur.next;
      l1 = l1?.next;
      l2 = l2?.next;
  }
  return dum.next;
};