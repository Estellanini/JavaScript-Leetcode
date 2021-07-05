//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
//前序遍历：根左右，所以结果应为1 2 4 3 5 7 8 6
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
/*function preorderTraversal(root,array){
    if(root){
        array.push(root.value);
        preorderTraversal(root.left,array);
        preorderTraversal(root.right,array);
    }
    return array;
}
let res=[];
console.log(preorderTraversal(tree,res));//[1, 2, 4, 3, 5, 7, 8, 6]*/

//非递归实现
// 取跟节点为目标节点，开始遍历
// 1.访问目标节点
// 2.左孩子入栈 -> 直至左孩子为空的节点
// 3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
function preorderTraversal(root) {
    const result=[];
    const stack=[];
    let current=root;
    while(current||stack.length>0){
        while(current){
            result.push(current.value);
            stack.push(current);
            current=current.left;
        }
        current=stack.pop();
        current=current.right;
    }
    return result;
}
console.log(preorderTraversal(tree));//[1, 2, 4, 3, 5, 7, 8, 6]




