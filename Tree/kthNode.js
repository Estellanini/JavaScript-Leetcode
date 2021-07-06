//描述 :给定一棵二叉搜索树，请找出其中的第k小的TreeNode结点。
//输入：
// {5,3,7,2,4,6,8},3
// 返回值：4
// 说明：按结点数值大小顺序第三小结点的值为4
//思路：二叉搜索树的中序遍历是排序的
function KthNode(pRoot, k) {
    let res=[];
    inorderTraversal(pRoot,res);
    console.log(res)
    return res[k-1];
}
function inorderTraversal(node,array){
    if(node){
        inorderTraversal(node.left,array);
       // array.push(node.value);//这种写法不AC
        array.push(node);//这种会AC why??
        inorderTraversal(node.right,array);
    }
    return array;
}

