//第一个只出现一次的字符
//在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置,
// 如果没有则返回 -1（需要区分大小写）.（从0开始计数
//输入： "google"  返回值：4
function FirstNotRepeatingChar(str)
{
    const map=new Map();
    for(let i=0;i<str.length;i++){
        let target=map.get(str[i]);
        if(target){
            map.set(str[i],++target);//这里用target++就不对
        }else{
            map.set(str[i],1);
        }
    }
    //console.log(map)
    let index=-1;
    map.forEach((value, key) => {
        if(value===1&&index===-1){
            index=str.indexOf(key);
        }
    })
    console.log(index)
    return index;
}
FirstNotRepeatingChar('google');
