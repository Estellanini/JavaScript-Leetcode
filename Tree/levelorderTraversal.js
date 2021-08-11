//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
//     / \
//    7   8
//层序遍历：所以结果应为12345678
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
//思路：我们定义一个数组 queue 来存储每一层的节点，初始先把根节点放进去。
// 当 queue 长度大于 0 的时候，定义一个数组 arr 来存储每一层的节点值。
// 同时把每个节点的左右节点添加到数组 queue 中去。

/*function levelOrder(root){
    if(!root) return []
    let res=[];//最终结果
    let queue=[root];//初始将根节点放入队列
    while(queue.length>0){
        let arr=[];
        let len=queue.length;
        while(len--){
            const node=queue.shift();
            arr.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(arr)
    }
    return res;
}*/
//console.log(levelOrder(tree))//[ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]




function levelOrder(root){
    if(!root) return []
    let res=[];//最终结果
    let queue=[root];//初始将根节点放入队列
    while(queue.length>0){
        const node=queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        res.push(node.value);
    }
    return res;
}

console.log(levelOrder(tree))//[1, 2, 3, 4,5, 6, 7, 8]








