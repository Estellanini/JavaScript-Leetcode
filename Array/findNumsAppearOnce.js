//描述
// 一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
// 示例1 输入：[1,4,1,6] 返回值： [4,6]
// 说明：返回的结果中较小的数排在前面
function FindNumsAppearOnce( array ) {
    let hash=[];
    for(let i=0;i<array.length;i++){
        if(!hash[array[i]]){
            hash[array[i]]=1;
        }
        else hash[array[i]]++;
    }
    let res=[];
    for(let i=0;i<hash.length;i++){
        if(hash[i]===1){
            res.push(i);
        }
    }
    return res;
}

console.log(FindNumsAppearOnce([1,4,1,6] ))
