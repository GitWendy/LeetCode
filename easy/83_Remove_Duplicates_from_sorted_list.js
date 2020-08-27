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
var deleteDuplicates = function(head) {

  var curNode = head;
  while(curNode){
    var tempNode = curNode.next;
    var prevNode = curNode;
    while(tempNode){
      if(tempNode.val === curNode.val){
        prevNode.next = tempNode.next;
        tempNode.next = null;
        tempNode = prevNode.next;
      } else {
        prevNode = prevNode.next;
        tempNode = tempNode.next;
      }
    }
    curNode = curNode.next;
  }
  return head;
};
