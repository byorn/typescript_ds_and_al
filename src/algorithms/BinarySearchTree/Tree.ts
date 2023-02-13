/*

Inserting
---------
It will take a random array of number, and will add the first number to the root of the tree.
If the second number is less than the root node, it will go to the left, else it will go to the right.

Traversing
----------
1) Level order (BFS - Breath first Search)
2) Pre Order (DFS - Depth first search)
3) Post order (DFS)
4) In order (DFS) (You get sorted data)

Pre-order traversal visits the root node first, then the left subtree,
and finally the right subtree. The order of visiting nodes in pre-order is root-left-right.

Post-order traversal visits the left subtree first, then the right subtree,
and finally the root node. The order of visiting nodes in post-order is left-right-root.

In-Order - left - Root - Right
-----------------------------------
                                  25
                               /       \
                              20         27
                             /  \      /   \
                            15   22   26    30
                                            /  \
                                           29   32

Pre Order
25, 20,15,22,27,26,30,29,32  Root First, Left, Right

In Order
15, 20,22,25,26,27,29,30,32. Left First, Root, Right

Post Order. - Left, Right, Root last
15, 22,20,26,29,32,30,27,25

Advantages
-----------
1) left most leaves will give you the minimum number
2) right most leaf will give you the maximum number
3) you get a sorted ds
4) insertioin and reading the tree is of OlogN

 */
import TreeNode from "./TreeNode";

class Tree {

    rootNode: TreeNode | null;
    constructor() {
        this.rootNode = null;
    }

    insert(value: number){
        if(this.rootNode === null){
            this.rootNode = new TreeNode(value);
        } else {
            this.rootNode.insert(value);
        }
    }

    traverseInorder():string | undefined{
        return this.rootNode?.traverseInorder();
    }

    traversePreOrder():string | undefined{
        return this.rootNode?.traversePreOrder();
    }
    traversePostOrder():string | undefined{
        return this.rootNode?.traversePostOrder();
    }

    get(searchValue:number):number | null {
        if (this.rootNode != null){
            return this.rootNode.get(searchValue);
        }else{
            return null;
        }
    }

    min():number | null{
        if(this.rootNode != null){
            return this.rootNode.min();
        }
        else{
            return null;
        }
    }
    max():number | null{
        if(this.rootNode != null){
            return this.rootNode.max();
        }
        else{
            return null;
        }
    }

    /**
     * delete only if the node is a leaf or has only 1 child.
     * if it has two chilren, then do not delete it.
     * @param valueToDelete
     *
     *    10
     *   /  \
     *      20
     *
     *  delete either 10 or 20
     */
    delete(valueToDelete:number):void{
        if(this.rootNode != null ) {
            this.rootNode = this.replaceSubTreeNode(this.rootNode, valueToDelete);
        }
    }
    replaceSubTreeNode(subTreeNode:TreeNode | null, valueToDelete:number): TreeNode | null  {
        //if the leaf is null, then return the null back
        if (subTreeNode == null){
            return subTreeNode;
        }

        if (valueToDelete < subTreeNode.treeNodeValue){
            subTreeNode.leftNode = this.replaceSubTreeNode (subTreeNode.leftNode, valueToDelete);
        } else if (valueToDelete > subTreeNode.treeNodeValue) {
            subTreeNode.rightNode = this.replaceSubTreeNode(subTreeNode.rightNode, valueToDelete);
        } else {
            // this is the subtree that has to be deleted.

            // this if statement is for the case that the subtree has 0 or 1 node.
            if(subTreeNode.leftNode == null){
                return subTreeNode.rightNode;
            }else if (subTreeNode.rightNode == null){
                return subTreeNode.leftNode;
            }

            // this is the case where the subtree has 2 nodes.
            subTreeNode.treeNodeValue = subTreeNode.rightNode.min();
            subTreeNode.rightNode = this.replaceSubTreeNode(subTreeNode.rightNode, subTreeNode.rightNode.min());
        }
        return subTreeNode;
    }
}

export default Tree;