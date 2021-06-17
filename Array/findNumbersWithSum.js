//描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回两个数的乘积最小的，
// 如果无法找出这样的数字，返回一个空数组即可。
//返回值描述：
// 对应每个测试案例，输出两个数，小的先输出。
//示例1  输入：[1,2,4,7,11,15],15   返回值：[4,11]



function FindNumbersWithSum(array, sum){
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==sum)
                return [array[i],array[j]];
        }
    }
    return [];
}
