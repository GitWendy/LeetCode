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
var mergeTwoLists = function(l1, l2) {
  // 输出链表头节点
  var resList = new ListNode(null);
  // 保持移动的指针
  var tempList = resList;
  while(l1 && l2){
    var resVal = l1.val <= l2.val ? l1.val : l2.val;
    tempList.next = new ListNode(resVal);
    tempList = tempList.next;
    if(l1.val <= l2.val){
      l1 = l1.next
    } else {
      l2 = l2.next
    }
  }
  if(!l1){
      tempList.next = l2;
    }
    if(!l2){
      tempList.next = l1;
    }
  return resList.next;
};
