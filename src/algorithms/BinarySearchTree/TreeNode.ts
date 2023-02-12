class TreeNode {

    leftNode: TreeNode | null;
    rightNode: TreeNode | null;
    constructor(public treeNodeValue:number) {
        this.leftNode = null;
        this.rightNode = null;
    }

    insert(value:number) :void{
        if( this.treeNodeValue == null){
            this.treeNodeValue = value;
        }
        else if (value < this.treeNodeValue){
            if (this.leftNode == null) {
                this.leftNode = new TreeNode(value);
            } else {
                this.leftNode.insert(value);
            }
        } else if (value > this.treeNodeValue){
            if (this.rightNode == null) {
                this.rightNode = new TreeNode(value);
            } else {
                this.rightNode.insert(value);
            }
        }
    }
}



