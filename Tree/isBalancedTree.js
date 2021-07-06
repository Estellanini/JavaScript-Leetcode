//描述
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
//注：我们约定空树是平衡二叉树。
//输入：
// {1,2,3,4,5,6,7}
// 返回值：true

//本题测试用例
//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
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

function IsBalanced_Solution(pRoot) {
    if(!pRoot) return true;
    if(Math.abs(TreeDepth(pRoot.left)-TreeDepth(pRoot.right))>1) return false;
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
function TreeDepth(node) {
    return node? Math.max(TreeDepth(node.left),TreeDepth(node.right))+1:0;
}

console.log(IsBalanced_Solution(tree));//true
