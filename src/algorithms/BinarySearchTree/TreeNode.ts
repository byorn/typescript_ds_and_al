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

    traverseInorder():string {
            let inOrderStr = '';
            //left
            if( this.leftNode != null ){
                inOrderStr +=this.leftNode.traverseInorder();
            }
            //root
            inOrderStr += ", " + this.treeNodeValue;
            //right
            if ( this.rightNode != null ) {
                inOrderStr += this.rightNode.traverseInorder();
            }
            return inOrderStr;
    }

    traversePreOrder():string {
        let str = '';

        //root
        str += ", " + this.treeNodeValue;

        //left
        if( this.leftNode != null ){
            str +=this.leftNode.traversePreOrder();
        }
        //right
        if ( this.rightNode != null ) {
            str += this.rightNode.traversePreOrder();
        }
        return str;
    }

    traversePostOrder():string {
        let str = '';

        //left
        if( this.leftNode != null ){
            str +=this.leftNode.traversePostOrder();
        }

        //right
        if ( this.rightNode != null ) {
            str += this.rightNode.traversePostOrder();
        }

        //root
        str += ", " + this.treeNodeValue;
        return str;
    }
}

export default TreeNode;



