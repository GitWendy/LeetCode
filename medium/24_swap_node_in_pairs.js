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
var swapPairs = function(head) {
  /**
   * 常规解题思路，遍历
   */
  // 创建一个头节点，防止极端情况发生
  var dummy = new ListNode(0);
  dummy.next = head;

  var tempList = dummy;
  
  while(tempList.next!== null && tempList.next.next!==null){
    var preNode = tempList.next;
    var curNode = tempList.next.next;
    tempList.next = curNode;
    preNode.next = curNode.next;
    curNode.next = preNode;
    tempList = preNode;
  }
  return dummy.next;
}
