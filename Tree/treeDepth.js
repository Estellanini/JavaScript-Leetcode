//求二叉树的深度
//描述
// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
//输入：
// {1,2,3,4,5,#,6,#,#,7}
// 返回值： 4



//相当于输入[1,2,3,4,#,5,6,#,#,7,8]
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
function TreeDepth(pRoot) {
    return pRoot? Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right))+1:0;
}

console.log(TreeDepth(tree));//4
