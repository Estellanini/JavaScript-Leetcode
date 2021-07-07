//把二叉树打印成多行
//描述
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
//示例1
// 输入：
// {8,6,10,5,7,9,11}
// 返回值：
// [[8],[6,10],[5,7,9,11]]
//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
var tree = {
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
}

function Print(pRoot) {
    if(!pRoot) return [];
    let res=[];
    let queue=[];
    queue.push(pRoot);
    while(queue.length>0){
        let len=queue.length;
        let arr=[];
        for(let i=0;i<len;i++){
            let node=queue.shift();
            arr.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        res.push(arr);
    }
    return res;
}

console.log(Print(tree))
//[1],[2, 3],[4, 5, 6],[7, 8]

