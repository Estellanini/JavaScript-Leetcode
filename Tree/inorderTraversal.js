//二叉树的创建
//层序遍历：ABCDEFGHI
//中序遍历：GDHBAEICF
/*function TreeCode() {
    let BiTree = function (ele) {
        this.data = ele;
        this.lChild = null;
        this.rChild = null;
    }

    this.createTree = function () {
        let biTree = new BiTree('A');
        biTree.lChild = new BiTree('B');
        biTree.rChild = new BiTree('C');
        biTree.lChild.lChild = new BiTree('D');
        biTree.lChild.lChild.lChild = new BiTree('G');
        biTree.lChild.lChild.rChild = new BiTree('H');
        biTree.rChild.lChild = new BiTree('E');
        biTree.rChild.rChild = new BiTree('F');
        biTree.rChild.lChild.rChild = new BiTree('I');
        return biTree;
    }
}
let mytree=new TreeCode();
mytree.createTree();*/
//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
//中序遍历：左根右，所以结果应为4 2 1 7 5 8 3 6
var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

//递归实现
/*function inorderTraversal(root,array){
    if(root){
        inorderTraversal(root.left,array);
        array.push(root.value);
        inorderTraversal(root.right,array);
    }
    return array;
}
let res=[];
console.log(inorderTraversal(tree,res))//[4, 2, 1, 7, 5, 8, 3, 6]*/
function inorderTraversal(root){
    if(root){
        inorderTraversal(root.left);
        console.log(root.value);
        inorderTraversal(root.right);
    }
}
inorderTraversal(tree);//4, 2, 1, 7, 5, 8, 3, 6 单独输出而不是数组

//非递归实现
//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
//取跟节点为目标节点，开始遍历
//1.左孩子入栈 -> 直至左孩子为空的节点
// 2.节点出栈 -> 访问该节点
// 3.以右孩子为目标节点，再依次执行1、2、3
//中序遍历：左根右，所以结果应为4 2 1 7 5 8 3 6
/*function inorderTraversal(root){
    const result=[];
    const stack=[];
    let current=root;
    while(current||stack.length>0){
        while(current){//1.左孩子入栈 -> 直至左孩子为空的节点
            stack.push(current);
            current=current.left;
        }
        current=stack.pop();// 2.节点出栈
        result.push(current.value);//-> 访问该节点
        current=current.right;// 3.以右孩子为目标节点，再依次执行1、2、3
    }
    return result;
}
console.log(inorderTraversal(tree));//[4, 2, 1, 7, 5, 8, 3, 6]*/








