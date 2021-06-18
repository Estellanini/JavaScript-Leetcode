//描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
// 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
//示例1   输入：[1,2,3,4]  返回值：[1,3,2,4]
//示例2   输入：[2,4,6,5,7] 返回值：[5,7,2,4,6]
function reOrderArray( array ) {
    let arr1=[];
    let arr2=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0)
            arr1.push(array[i]);
        else arr2.push(array[i]);
    }
    return arr2.concat(arr1);
}

console.log(reOrderArray([2,4,6,5,7]))
