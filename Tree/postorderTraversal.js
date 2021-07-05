//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
//后序遍历：左右根，所以结果应为4 2 7 8 5 6 3 1
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
/*function postorderTraversal(root,array){
    if(root){
        postorderTraversal(root.left,array);
        postorderTraversal(root.right,array);
        array.push(root.value);
    }
    return array;
}
let res=[];
console.log(postorderTraversal(tree,res));//[4, 2, 7, 8, 5, 6, 3, 1]*/

//非递归实现
//取根节点为目标节点，开始遍历
// 1.左孩子入栈 -> 直至左孩子为空的节点
// 2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
// 3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3

function postorderTraversal(root){
    const result=[];
    const stack=[];
    let last=null;//标记上一个访问的节点
    let current=root;
    while(current||stack.length>0){
        while(current){// 1.左孩子入栈 -> 直至左孩子为空的节点
            stack.push(current);
            current=current.left;
        }
        current=stack[stack.length-1];
        if(!current.right||current.right==last){
            current=stack.pop();
            result.push(current.value);
            last=current;
            current=null;//继续弹栈
        }else{
            current=current.right;
        }
    }
    return result;
}
console.log(postorderTraversal(tree));//[4, 2, 7, 8, 5, 6, 3, 1]











