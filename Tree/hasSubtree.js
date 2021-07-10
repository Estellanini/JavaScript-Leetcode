// 树的子结构
//描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
//输入：{8,8,#,9,#,2,#,5},{8,9,#,2}
// 返回值：true
function HasSubtree(pRoot1, pRoot2) {
    let result = false;
    if (pRoot1 && pRoot2) {
        if (pRoot1.val === pRoot2.val) {
            result = compare(pRoot1, pRoot2);
        }
        if (!result) {
            result = HasSubtree(pRoot1.right, pRoot2);
        }
        if (!result) {
            result = HasSubtree(pRoot1.left, pRoot2);
        }
    }
    return result;
}

function compare(pRoot1, pRoot2) {
    if (pRoot2 === null) {
        return true;
    }
    if (pRoot1 === null) {
        return false;
    }
    if (pRoot1.val !== pRoot2.val) {
        return false;
    }
    return compare(pRoot1.right, pRoot2.right) && compare(pRoot1.left, pRoot2.left);
}
