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
  // 新链表的尾节点
  var newDummy = new ListNode(-1);
  var curNode = head;
  while(curNode){
    head = head.next
    curNode.next = newDummy.next;
    newDummy.next = curNode;
    curNode = head;
  }
  return newDummy.next;
};
