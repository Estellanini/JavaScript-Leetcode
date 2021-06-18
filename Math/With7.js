//描述：输出数组中7的倍数及包含7的值的个数
// 输入：17 14 22
// 输出：2

function test(line){
    let lines=line.split(' ');//分解为字符串数组
    let res=0;
    for(let i=0;i<lines.length;i++){
        if(parseInt(lines[i])%7===0||lines[i].indexOf('7')!=-1){//注意要将字符串数组中的值转变为数字值才能取余操作
            res++;
        }
    }
    return res;
}

console.log(test('17 14 22'));//2
