/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 创建一个哑节点指向头节点，防止第一个节点被删除
  var dummy = new ListNode(0);
  dummy.next = head;

  var prevPoint = dummy;
  var curPoint = head;
  while(curPoint){
    if(curPoint.val === val){
      prevPoint.next = curPoint.next;
      curPoint.next = null;
      curPoint = prevPoint.next;
    }else {
      prevPoint = prevPoint.next;
      curPoint = curPoint.next;
    }
  }
  return dummy.next;
};
