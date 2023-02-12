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
class Tree {
    constructor(public rootNode:TreeNode) {
    }

    insert(value: number){
        if(this.rootNode == null){
            this.rootNode = new TreeNode(value);
        } else {
            this.rootNode.insert(value);
        }
    }
}