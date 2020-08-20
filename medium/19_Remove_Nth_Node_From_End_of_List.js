/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 普通思路
 */
var removeNthFromEnd = function(head, n) {
  // 定义一个移动的指针
  var tempList = head;
  // 定义一个链表长度
  var listLength = 0;
  while(tempList){
    tempList = tempList.next;
    listLength ++;
  }
  // 定义要删除的元素的正序位置
  var removeLoc = listLength - n + 1;
  // 从头开始遍历
  var currentLoc = 1;
  tempList = head;
  // 和tempList同时移动，保存tempList的上一个元素
  if(n < listLength){
    tempList = tempList.next
    currentLoc ++;
  }
  var preNode = head;
  while(tempList){
    if(currentLoc === removeLoc){
      if(preNode === tempList){
        head = head.next;
      } else {
        preNode.next = tempList.next;
        tempList.next = null;
      }
      break;
    } else if(currentLoc < removeLoc){
      tempList = tempList.next;
      preNode = preNode.next;
      currentLoc ++;
    }
  }
  return head;
};
