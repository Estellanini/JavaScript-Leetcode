//描述
// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
//示例1  输入：5  返回值：15

/*function Sum_Solution(n)
{
    // write code here
    return n*(1+n)/2;
}*/
function Sum_Solution(n) {
    if(n === 1) return 1;
    return  n && n + Sum_Solution(n - 1);
}

console.log(Sum_Solution(5))
