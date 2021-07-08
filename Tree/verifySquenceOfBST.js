// 二叉搜索树的后序遍历序列
//描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。
// 假设输入的数组的任意两个数字都互不相同。（ps：我们约定空树不是二叉搜索树）
//输入： [4,8,6,12,16,14,10]
// 返回值：true

/*function VerifySquenceOfBST(sequence)
{
    if(sequence&&sequence.length>0){
        var root=sequence[sequence.length-1];
        for(var i=0;i<sequence.length-1;i++){
            if(sequence[i]>root){
                break;
            }
        }
        for(let j=i;j<sequence.length-1;j++){
            if(sequence[j]<root){
                return false;
            }
        }
        var left=true;
        if(i>0){
            left=VerifySquenceOfBST(sequence.slice(0,i));
        }
        var right=true;
        if(i<sequence.length-1){
            right=VerifySquenceOfBST(sequence.slice(i,sequence.length-1));
        }
        return left&&right;
    }
}*/

console.log(VerifySquenceOfBST([4,8,6,12,16,14,10]))


function VerifySquenceOfBST(sequence) {
    // write code here
    if (sequence.length === 0) {
        return false;
    }
    return check(sequence, 0, sequence.length - 1);
}

//
function check(sequence, left, right) {
    if (left >= right) {
        return true;
    } else {
        let mid = sequence[right];
        let i;
        for (i = left; i < right; i++) {
            if (sequence[i] > mid) {
                break;
            }
        }
        for (let j = i; j < right; j++) {
            if (sequence[j] <= mid) {
                return false;
            }
        }
        return check(sequence, left, i - 1) && check(sequence, i, right - 1);
    }
}
