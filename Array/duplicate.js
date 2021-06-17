//描述
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。
// 也不知道每个数字重复几次。请找出数组中任一一个重复的数字。
// 例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，那么对应的输出是2或者3。存在不合法的输入的话输出-1
//输入：[2,3,1,0,2,5,3]  返回值：2   说明：2或3都是对的

//输出第一个重复值
/*function duplicate( numbers ) {
    // write code here
    let arr=[];
    for(let i=0;i<numbers.length;i++){
        if(arr[numbers[i]]){
            return numbers[i];
        }else{
            arr[numbers[i]]=1;
        }
    }
    return -1;
}*/
/*
function duplicate( numbers ) {
    // write code here
    let arr=[];
    for(let i=0;i<numbers.length;i++){
        if(!arr[numbers[i]]){
            arr[numbers[i]]=1;
        }else{
            return numbers[i];
        }
    }
    return -1;
}
*/

//输出最后一个重复值
/*function duplicate( numbers ) {
    // write code here
    let arr=[];
    for(let i=numbers.length-1;i>=0;i--){
        if(arr[numbers[i]]){
            return numbers[i];
        }else{
            arr[numbers[i]]=1;
        }
    }
    return -1;
}*/
//输出全部重复值
function duplicate( numbers ) {
    // write code here
    if(numbers.length<=0) return -1
    let arr=[];
    let res=[];
    for(let i=0;i<numbers.length;i++){
        if(arr[numbers[i]]){
            res.push(numbers[i]);
        }else{
            arr[numbers[i]]=1;
        }
    }
    if(res.length===0) return -1;
    else return res;
}
console.log(duplicate([3,2,1,0,3,5,2]))
//console.log(duplicate([1,2,3,4,5,6]))
