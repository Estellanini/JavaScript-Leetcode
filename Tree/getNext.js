//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
/*var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        }
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: {
                val: 7
            },
            right: {
                val: 8
            }
        },
        right: {
            val: 6
        }
    }
}*/
var tree = {
    val: 8,
    left: {
        val: 6,
        left: {
            val: 5
        },
        right:{
            val: 7
        }
    },
    right: {
        val: 10,
        left: {
            val: 9,
        },
        right: {
            val: 11
        }
    }
}
/*
不AC
function GetNext(pNode)
{
    // write code here
    let array=[];
    let index=inorder(pNode,array).indexOf(pNode.val);
    return array[index+1];
}
function inorder(node,array){
    if(node){
        inorder(node.left,array);
        array.push(node.val);
        inorder(node.right,array);
    }
    return array;
}

console.log(GetNext(tree));//7
//中序遍历：左根右，所以结果应为4 2 1 7 5 8 3 6*/




