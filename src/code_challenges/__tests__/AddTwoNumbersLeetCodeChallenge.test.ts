/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
// https://leetcode.com/problems/add-two-numbers/

import {addTwoNodes} from "../AddTwoNumbers";
import ListNode from "../common/ListNode";
describe('Add two numbers', ()=>{

    test(' should add two nodes in reverse', ()=>{
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
        const l3: ListNode | null = addTwoNodes(l1, l2);
        let currentNode: ListNode | null = l3;
        let str = '';
        while(currentNode != null){
            str += currentNode.val;
            currentNode = currentNode.next;
        }
        expect(str).toEqual("708");
    });

    test ('should add two nodes when lenght is differed', ()=>{
        const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
        const l2 = [5,6,4];
        let l1Head: ListNode | null = null;
        for(let i=l1.length-1; i>=0; i--){
            l1Head = new ListNode(l1[i],l1Head);
        }
        let l2Head: ListNode | null = null;
        for(let i=l2.length-1; i>=0; i--){
            l2Head = new ListNode(l2[i],l2Head);
        }
        const l3: ListNode | null = addTwoNodes(l1Head, l2Head);
        let currentNode: ListNode | null = l3;
        let str = '';
        while(currentNode != null){
            str += currentNode.val;
            currentNode = currentNode.next;
        }
        expect(str).toEqual("6640000000000000000000000000001");
    })



})