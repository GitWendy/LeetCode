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
  // flag(进位符号)
  var flag = 0;
  // 新链表的头节点
  var newListNode = new ListNode(0);
  // [指针]指向新链表的头节点
  var pointNewList = newListNode;

  let sum = 0;
  while(l1 || l2){
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
   
    sum = (l1Val + l2Val + flag)%10;
    flag = (l1Val + l2Val+flag)/10 < 1 ? 0 : 1;
    
    // 创建一个新的节点保存两个节点之和
    newListNode.next = new ListNode(sum);
    
    newListNode = newListNode.next;
    if(l1){
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }
    
  }
  if(flag > 0){
    newListNode.next = new ListNode(flag);
  }
  
  return pointNewList.next;
    
};
