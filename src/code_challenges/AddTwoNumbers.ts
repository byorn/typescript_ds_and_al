 /*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
// https://leetcode.com/problems/add-two-numbers/
import ListNode from './common/ListNode';
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const strNumber1 = printLinkedListInReverseRecursive(l1);
  const strNumber2 = printLinkedListInReverseRecursive(l2);
  const answer = BigInt(strNumber1) + BigInt(strNumber2);
  return addToLinkedList(answer.toString());
 };

 export const addTwoNodes = addTwoNumbers;
 function addToLinkedList(v1:string):ListNode | null {
     let headNode = null;
     for(let c = 0 ; c < v1.length ; c++){
         headNode = new ListNode(parseInt(v1[c]), headNode);
     }
     return headNode;
 }
 function printLinkedListInReverseRecursive(l: ListNode | null):string {
     let strNumber = '';
     // Base case: If the node is null, return
     if (l === null) {
         return '';
     }

     // Recursive case: Call the function recursively on the next node, then print the current node's value
     strNumber += printLinkedListInReverseRecursive(l.next);
     strNumber += l.val;
     return strNumber;
 }





