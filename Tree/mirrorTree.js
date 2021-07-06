// 二叉树的镜像
// 操作给定的二叉树，将其变换为源二叉树的镜像。
//比如：    源二叉树
//             8
//            /  \
//           6   10
//          / \  / \
//         5  7 9 11
//         镜像二叉树
//             8
//            /  \
//           10   6
//          / \  / \
//         11 9 7  5



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

function Mirror( pRoot ) {
    // write code here
    if(!pRoot)return null
    if(pRoot){
        [pRoot.left,pRoot.right]=[pRoot.right,pRoot.left];
        Mirror(pRoot.left);
        Mirror(pRoot.right);
    }
    return pRoot;
}

console.log(Mirror(tree));
