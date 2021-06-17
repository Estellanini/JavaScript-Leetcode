//数组中出现次数超过一半的数字
//描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。1<=数组长度<=50000
//示例1 输入： [1,2,3,2,2,2,5,4,2]   返回值：2
//示例2 输入： [3,3,3,3,2,2,2]    返回值：3


function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    let arr=[];
    for(let i=0;i<numbers.length;i++){
        if(arr[numbers[i]]===undefined){
            arr[numbers[i]]=1;
        }
        else arr[numbers[i]]++;
    }
    for(let j=0;j<arr.length;j++){
        if(arr[j]>numbers.length/2)
            return j;
    }
}

//console.log(moreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]))//2
console.log(MoreThanHalfNum_Solution([3,3,3,3,3,3,2,2,2,1,0]))//3
