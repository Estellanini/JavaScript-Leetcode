//描述
// 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
// 示例1   输入：10   返回值：2
function NumberOf1(n)
{
    // write code here
    let num=0;
    while(n){
        num++;
        n=n&(n-1);
    }
    return num;
}
